import { HttpLink, ApolloLink } from "@apollo/client";
import * as apolloUtils from "../../utils/apollo";
import { GITHUB_ENDPOINT, REQUEST_TIMEOUT } from "../../constants/app";
import ApolloLinkTimeout from "apollo-link-timeout";

const httpLink = new HttpLink({ uri: GITHUB_ENDPOINT });
const token = process.env.REACT_APP_GITHUB_PAT;

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

const repoMergePolicy = {
  keyArgs: false,
  merge(existing, incoming) {
    if (!existing) return incoming;
    if (!incoming) return existing;

    // We should return the incoming data if there are no repos
    const firstNewRepoDate = incoming.nodes[0]?.createdAt;

    // Check if cached data has nodes, edge case if user
    // has no repos, then creates one after subsequent search
    const existingRepos = existing.nodes || [];
    const existingRepoDate = existingRepos.find(
      (repo) => repo.createdAt === firstNewRepoDate
    );

    // When a user submits the same search, we return the first
    // 10 results instead of all of the merged results stored in
    // existing
    if (firstNewRepoDate === undefined || existingRepoDate !== undefined) {
      return incoming;
    }

    return {
      ...incoming,
      nodes: [...existing.nodes, ...incoming.nodes],
    };
  },
};

const cache = {
  typePolicies: {
    Organization: {
      keyFields: ["login"],
      fields: {
        repositories: repoMergePolicy,
      },
    },
    User: {
      keyFields: ["login"],
      fields: {
        repositories: repoMergePolicy,
      },
    },
  },
};

export default apolloUtils.createApolloClient(links, cache);
