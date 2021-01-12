import { HttpLink, ApolloLink } from "@apollo/client";
import * as apolloUtils from "../../utils/apollo";
import { GITHUB_ENDPOINT, REQUEST_TIMEOUT } from "../../constants/app";
import ApolloLinkTimeout from "apollo-link-timeout";

const httpLink = new HttpLink({ uri: GITHUB_ENDPOINT });
const token = "8a09b348e3b4ca491ed941e09f105cb14d32e479";

const authLink = apolloUtils.authLink({
  authorization: token ? `Bearer ${token}` : "",
});

const loggerLink = apolloUtils.loggerLink(
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

const errorLink = apolloUtils.errorLink((graphQLErrors, networkError) => {
  const errors = {
    type: graphQLErrors ? "GraphQL Error" : "Network Error",
    data: graphQLErrors || networkError,
  };

  console.log(errors);
});

const timeoutLink = new ApolloLinkTimeout(REQUEST_TIMEOUT);

const links = ApolloLink.from([
  loggerLink,
  authLink,
  errorLink,
  timeoutLink,
  httpLink,
]);

const cache = {
  typePolicies: {
    Organization: {
      keyFields: ["login"],
    },
    User: {
      keyFields: ["login"],
    },
  },
};

export default apolloUtils.createApolloClient(links, cache);
