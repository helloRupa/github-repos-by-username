import { ApolloProvider } from "@apollo/client";
import client from "./domain/utils/apollo";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./domain/Header";
import SearchPage from "./domain/SearchPage";
import ErrorFallback from "./domain/ErrorFallback";

function App() {
  return (
    <>
      <Header />
      <ApolloProvider client={client}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SearchPage />
        </ErrorBoundary>
      </ApolloProvider>
    </>
  );
}

export default App;
