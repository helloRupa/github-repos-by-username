import { ApolloProvider } from "@apollo/client";
import CLIENT from "./apollo";
import Button from "./components/Button/index";
import "./App.css";
import ApolloTest from "./ApolloTest";

function App() {
  return (
    <ApolloProvider client={CLIENT}>
      <div className="App">
        <ApolloTest />
        <Button display={"hi"} type={"button"} onClick={() => "stuff"} />
      </div>
    </ApolloProvider>
  );
}

export default App;
