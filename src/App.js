import { ApolloProvider } from "@apollo/client";
import CLIENT from "./apollo";
import "./App.css";
import ApolloTest from "./ApolloTest";
import ButtonApollo from "./ButtonApollo";

function App() {
  return (
    <ApolloProvider client={CLIENT}>
      <div className="App">
        <ApolloTest />
        <ButtonApollo />
      </div>
    </ApolloProvider>
  );
}

export default App;
