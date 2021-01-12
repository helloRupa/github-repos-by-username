import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

export const createApolloClient = (links, cache) =>
  new ApolloClient({
    link: links,
    cache: new InMemoryCache(cache),
  });

export const authLink = (authHeaders = {}) =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      ...authHeaders,
    },
  }));

export const loggerLink = (startFn, endFn) =>
  new ApolloLink((operation, forward) => {
    if (typeof startFn === "function") {
      startFn(operation);
    }

    return forward(operation).map((response) => {
      if (typeof endFn === "function") {
        endFn(operation, response);
      }
      return response;
    });
  });

export const errorLink = (errorFn) =>
  onError(({ graphQLErrors, networkError }) => {
    if (typeof errorFn !== "function") {
      return;
    }

    errorFn(graphQLErrors, networkError);
  });
