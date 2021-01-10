import { gql } from "@apollo/client";

const REPO_OWNER_FRAGMENT = gql`
  fragment OwnerFields on User {
    login
    ... on User {
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
      watchers {
        totalCount
      }
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
      ...OwnerFields
      repositories(orderBy: { field: UPDATED_AT, direction: DESC }, first: 10) {
        ...RepoFields
      }
    }
  }
  ${REPO_OWNER_FRAGMENT}
  ${REPO_FRAGMENT}
`;

export const GET_MORE_REPOS = gql`
  query getMoreRepos($username: String!, $endCursor: String!) {
    repositoryOwner(login: $username) {
      ...OwnerFields
      repositories(
        orderBy: { field: UPDATED_AT, direction: DESC }
        first: 10
        after: $endCursor
      ) {
        ...RepoFields
      }
    }
  }
  ${REPO_OWNER_FRAGMENT}
  ${REPO_FRAGMENT}
`;

// export const GET_USER_REPOS = gql`
//   query getUserRepos($username: String!, $endCursor: String) {
//     repositoryOwner(login: $username) {
//       login
//       ... on User {
//         url
//       }
//       repositories(
//         orderBy: { field: UPDATED_AT, direction: DESC }
//         first: 10
//         after: $endCursor
//       ) {
//         totalCount
//         nodes {
//           name
//           createdAt
//           description
//           forkCount
//           url
//           updatedAt
//           watchers {
//             totalCount
//           }
//           stargazerCount
//         }
//         pageInfo {
//           endCursor
//           hasNextPage
//         }
//       }
//     }
//   }
// `;

// EXAMPLE RESPONSES
/*
{
  "data": {
    "repositoryOwner": null
  }
}


{
  "data": {
    "repositoryOwner": {
      "login": "helloRupa",
      "url": "https://github.com/helloRupa",
      "repositories": {
        "totalCount": 328,
        "nodes": [
          {
            "name": "react-lifecycle-activity",
            "createdAt": "2020-10-23T23:57:23Z",
            "description": "Annoying alerts to learn about lifecycle methods",
            "forkCount": 9,
            "url": "https://github.com/helloRupa/react-lifecycle-activity",
            "updatedAt": "2020-10-23T23:57:46Z",
            "watchers": {
              "totalCount": 1
            },
            "stargazerCount": 0
          },
          {
            "name": "react-pets-activity",
            "createdAt": "2020-10-23T21:35:38Z",
            "description": "Pre-lecture activity for the React Pets lab",
            "forkCount": 0,
            "url": "https://github.com/helloRupa/react-pets-activity",
            "updatedAt": "2020-10-23T21:42:24Z",
            "watchers": {
              "totalCount": 1
            },
            "stargazerCount": 0
          },
          {
            "name": "code-convo-form",
            "createdAt": "2020-10-22T02:12:41Z",
            "description": "Code convo form",
            "forkCount": 0,
            "url": "https://github.com/helloRupa/code-convo-form",
            "updatedAt": "2020-10-22T18:22:06Z",
            "watchers": {
              "totalCount": 1
            },
            "stargazerCount": 0
          },
          {
            "name": "wasted_beverages_cli",
            "createdAt": "2020-10-21T16:16:44Z",
            "description": "Ruby CLI app.",
            "forkCount": 0,
            "url": "https://github.com/helloRupa/wasted_beverages_cli",
            "updatedAt": "2020-10-21T16:17:20Z",
            "watchers": {
              "totalCount": 0
            },
            "stargazerCount": 0
          },
          {
            "name": "ruby-methods-readme",
            "createdAt": "2020-10-19T17:37:49Z",
            "description": "readme about methods in ruby",
            "forkCount": 0,
            "url": "https://github.com/helloRupa/ruby-methods-readme",
            "updatedAt": "2020-10-19T17:37:51Z",
            "watchers": {
              "totalCount": 0
            },
            "stargazerCount": 0
          },
          {
            "name": "fewpjs-removing-altering-and-inserting-html-lab",
            "createdAt": "2020-10-16T20:54:01Z",
            "description": null,
            "forkCount": 0,
            "url": "https://github.com/helloRupa/fewpjs-removing-altering-and-inserting-html-lab",
            "updatedAt": "2020-10-16T20:54:02Z",
            "watchers": {
              "totalCount": 0
            },
            "stargazerCount": 0
          },
          {
            "name": "ruby-oo-fundamentals-email-parser-lab",
            "createdAt": "2020-10-16T20:40:13Z",
            "description": null,
            "forkCount": 0,
            "url": "https://github.com/helloRupa/ruby-oo-fundamentals-email-parser-lab",
            "updatedAt": "2020-10-16T20:40:14Z",
            "watchers": {
              "totalCount": 0
            },
            "stargazerCount": 0
          },
          {
            "name": "ruby-oo-fundamentals-object-initialization-lab",
            "createdAt": "2020-10-15T01:08:01Z",
            "description": null,
            "forkCount": 0,
            "url": "https://github.com/helloRupa/ruby-oo-fundamentals-object-initialization-lab",
            "updatedAt": "2020-10-15T02:19:23Z",
            "watchers": {
              "totalCount": 0
            },
            "stargazerCount": 0
          },
          {
            "name": "deploy-on-day-1",
            "createdAt": "2020-10-14T20:46:23Z",
            "description": "Deploy on Day 1",
            "forkCount": 0,
            "url": "https://github.com/helloRupa/deploy-on-day-1",
            "updatedAt": "2020-10-14T20:46:25Z",
            "watchers": {
              "totalCount": 0
            },
            "stargazerCount": 0
          },
          {
            "name": "just-testing-stuff",
            "createdAt": "2020-10-05T22:22:46Z",
            "description": "just testing",
            "forkCount": 1,
            "url": "https://github.com/helloRupa/just-testing-stuff",
            "updatedAt": "2020-10-06T21:06:44Z",
            "watchers": {
              "totalCount": 1
            },
            "stargazerCount": 1
          }
        ],
        "pageInfo": {
          "endCursor": "Y3Vyc29yOnYyOpK5MjAyMC0xMC0wNlQxNDowNjo0NC0wNzowMM4R-Vj9",
          "hasNextPage": true
        }
      }
    }
  }
}
*/
