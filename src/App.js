import { ApolloProvider } from "@apollo/client";
import client from "./domain/utils/apollo";
import { THEME_NAMES } from "./constants/app";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./domain/Header";
import SearchPage from "./domain/SearchPage";
import ErrorFallback from "./domain/ErrorFallback";
import DarkModeSwitch from "./components/DarkModeSwitch";

function App() {
  return (
    <>
      <Header />
      <DarkModeSwitch classNames={THEME_NAMES} />
      <ApolloProvider client={client}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SearchPage />
        </ErrorBoundary>
      </ApolloProvider>
    </>
  );
}

export default App;
