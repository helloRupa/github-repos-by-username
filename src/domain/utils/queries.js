import { gql } from "@apollo/client";

const REPO_USER_FRAGMENT = gql`
  fragment UserFields on User {
    ... on User {
      url
    }
  }
`;

const REPO_ORG_FRAGMENT = gql`
  fragment OrgFields on Organization {
    ... on Organization {
      url
    }
  }
`;

const REPO_FRAGMENT = gql`
  fragment RepoFields on RepositoryConnection {
    totalCount
    nodes {
      name
      createdAt
      description
      forkCount
      url
      updatedAt
      stargazerCount
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
`;

export const GET_USER_REPOS = gql`
  query getUserRepos($username: String!) {
    repositoryOwner(login: $username) {
      login
      ...UserFields
      ...OrgFields
      repositories(orderBy: { field: UPDATED_AT, direction: DESC }, first: 10) {
        ...RepoFields
      }
    }
  }
  ${REPO_USER_FRAGMENT}
  ${REPO_ORG_FRAGMENT}
  ${REPO_FRAGMENT}
`;

export const GET_MORE_REPOS = gql`
  query getMoreRepos($username: String!, $endCursor: String!) {
    repositoryOwner(login: $username) {
      login
      ...OwnerFields
      ...OrgFields
      repositories(
        orderBy: { field: UPDATED_AT, direction: DESC }
        first: 10
        after: $endCursor
      ) {
        ...RepoFields
      }
    }
  }
  ${REPO_USER_FRAGMENT}
  ${REPO_ORG_FRAGMENT}
  ${REPO_FRAGMENT}
`;
