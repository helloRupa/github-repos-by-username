import { useLazyQuery } from "@apollo/client";
import { GET_MORE_REPOS } from "./apollo_query";
import Button from "./components/Button/index";

const ButtonApollo = () => {
  const [getRepos, { loading, error, data }] = useLazyQuery(GET_MORE_REPOS, {
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
  return <Button display="Load More" type="button" onClick={getRepos} />;
};
// below is a component that was declared in the same file
export default ButtonApollo;
