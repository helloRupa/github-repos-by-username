import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { authLink, loggerLink, errorLink } from "./utils/apollo/custom_links";
// import { onError, loggerLink } from "@apollo/client/link/error";
import ApolloLinkTimeout from "apollo-link-timeout";

// const PAT = "d863f509a5a61e4a508e91771fafcc004f59cb14";
const GITHUB_ENDPOINT = "https://api.github.com/graphql";

const httpLink = (uri, headers = {}) =>
  new HttpLink({
    uri,
    headers,
  });

// const HTTP_LINK = httpLink(GITHUB_ENDPOINT, {
//   Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PAT}`,
// });

const HTTP_LINK = httpLink(GITHUB_ENDPOINT);

// const HTTP_LINK = new HttpLink({
//   uri: GITHUB_ENDPOINT,
//   headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PAT}` },
// });

// const authLink = (authHeaders = {}) =>
//   setContext((_, { headers }) => ({
//     headers: {
//       ...headers,
//       ...authHeaders,
//     },
//   }));

const TOKEN = process.env.REACT_APP_GITHUB_PAT;
const AUTH_LINK = authLink({
  authorization: TOKEN ? `Bearer ${TOKEN}` : "",
});

// const AUTH_LINK = setContext((_, { headers }) => {
//   const token = process.env.REACT_APP_GITHUB_PAT;

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const loggerLink = (startFn, endFn) =>
//   new ApolloLink((operation, forward) => {
//     if (typeof startFn === "function") {
//       startFn(operation);
//     }

//     return forward(operation).map((response) => {
//       if (typeof endFn === "function") {
//         endFn(operation, response);
//       }
//       return response;
//     });
//   });

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

// const LOGGER_LINK = new ApolloLink((operation, forward) => {
//   console.log(
//     `GraphQL Request: ${operation.operationName} with ${JSON.stringify(
//       operation.variables
//     )}`
//   );
//   operation.setContext({ start: new Date() });

//   return forward(operation).map((response) => {
//     const responseTime = new Date() - operation.getContext().start;
//     console.log(`GraphQL Response took: ${responseTime}`);
//     return response;
//   });
// });

// const errorLink = (errorFn) =>
//   onError(({ graphQLErrors, networkError }) => {
//     if (typeof errorFn !== "function") {
//       return;
//     }

//     errorFn(graphQLErrors, networkError);
//   });

const ERROR_LINK = errorLink((graphQLErrors, networkError) => {
  const errors = {
    type: graphQLErrors ? "GraphQL Error" : "Network Error",
    data: graphQLErrors || networkError,
  };

  console.log(errors);
});

// const ERROR_LINK = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(`GraphQL Error: ${message}`)
//     );
//   }
//   if (networkError) {
//     console.log(`Network Error: ${networkError.message}`);
//   }
// });

const TIMEOUT_LINK = new ApolloLinkTimeout(5_000);

const LINKS = ApolloLink.from([
  LOGGER_LINK,
  AUTH_LINK,
  ERROR_LINK,
  TIMEOUT_LINK,
  HTTP_LINK,
]);

const createApolloClient = (links) =>
  new ApolloClient({
    link: links,
    cache: new InMemoryCache(),
  });

export default createApolloClient(LINKS);
