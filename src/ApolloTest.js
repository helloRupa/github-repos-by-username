import { useQuery } from "@apollo/client";
import { GET_USER_REPOS } from "./apollo_query";

const ApolloTest = () => {
  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
    variables: {
      username: "helloRupa",
      endCursor: "Y3Vyc29yOnYyOpK5MjAyMC0xMi0wM1QxODoyMjowMC0wODowMM4S-hDl",
    },
  });

  if (loading) {
    console.log("LOADING QUERY");
  }

  if (error) {
    console.log("ERROR:");
    console.log(error);
  }

  console.log(data);
  // if loading, return loading div
  // if error, log error, return error div, log error to service, show user info
  return null;
};
// below is a component that was declared in the same file
export default ApolloTest;
