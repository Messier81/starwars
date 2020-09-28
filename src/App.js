import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql.org/swapi-graphql/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>HELLO AAWORLD</h1>
    </div>
  </ApolloProvider>
);

export default App;
