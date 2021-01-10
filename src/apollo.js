import { HttpLink, ApolloLink } from "@apollo/client";
import {
  authLink,
  loggerLink,
  errorLink,
  createApolloClient,
} from "./utils/apollo";
import ApolloLinkTimeout from "apollo-link-timeout";

const GITHUB_ENDPOINT = "https://api.github.com/graphql";

const httpLink = (uri, headers = {}) =>
  new HttpLink({
    uri,
    headers,
  });

const HTTP_LINK = httpLink(GITHUB_ENDPOINT);
const TOKEN = process.env.REACT_APP_GITHUB_PAT;
const AUTH_LINK = authLink({
  authorization: TOKEN ? `Bearer ${TOKEN}` : "",
});

const LOGGER_LINK = loggerLink(
  (operation) => {
    const { operationName, variables } = operation;

    console.log(
      `GraphQL Request: ${operationName}, Variables: ${JSON.stringify(
        variables
      )}`
    );

    operation.setContext({ startTime: new Date() });
  },
  (operation, response) => {
    const responseTime = new Date() - operation.getContext().startTime;
    const {
      response: { status },
    } = operation.getContext();

    console.log(`Flight Time: ${responseTime} ms, Status: ${status}`);
  }
);

const ERROR_LINK = errorLink((graphQLErrors, networkError) => {
  const errors = {
    type: graphQLErrors ? "GraphQL Error" : "Network Error",
    data: graphQLErrors || networkError,
  };

  console.log(errors);
});

const TIMEOUT_LINK = new ApolloLinkTimeout(5_000);

const LINKS = ApolloLink.from([
  LOGGER_LINK,
  AUTH_LINK,
  ERROR_LINK,
  TIMEOUT_LINK,
  HTTP_LINK,
]);

export default createApolloClient(LINKS);
