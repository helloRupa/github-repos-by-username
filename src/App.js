import { ApolloProvider } from "@apollo/client";
import client from "./domain/utils/apollo";
import "./App.css";
import Header from "./domain/Header";
import SearchPage from "./domain/SearchPage";

function App() {
  return (
    <>
      <Header />
      <ApolloProvider client={client}>
        <SearchPage />
      </ApolloProvider>
    </>
  );
}

export default App;
