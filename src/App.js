import { ApolloProvider } from "@apollo/client";
import client from "./domain/utils/apollo";
import "./App.css";
import Header from "./domain/Header";

function App() {
  return (
    <>
      <Header />
      <ApolloProvider client={client}></ApolloProvider>
    </>
  );
}

export default App;
