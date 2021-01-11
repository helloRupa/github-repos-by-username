export const APP_NAME = "notGitHub";
export const REQUEST_TIMEOUT = 7_000;
export const GITHUB_ENDPOINT = "https://api.github.com/graphql";
export const APOLLO_REQUEST_CONFIG = {
  errorPolicy: "all",
  fetchPolicy: "cache-and-network",
};
export const GITHUB_NAME_MIN_MAX_LENGTH = [1, 39];
export const GITHUB_NAME_PATTERN = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
export const SEARCH_VALIDITY_MESSAGE = `Up to 39 alphanumeric characters.
Single hyphens OK between characters`;

export const DATE_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
