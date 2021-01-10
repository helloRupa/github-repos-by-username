import { ApolloProvider } from "@apollo/client";
import CLIENT from "./apollo";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={CLIENT}>
      <div className="App"></div>
    </ApolloProvider>
  );
}

export default App;
