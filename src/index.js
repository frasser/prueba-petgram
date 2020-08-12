import React from "react";
import ReactDOM from "react-dom";
//import HelloWorld from "./components/HelloWorld";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

import { App } from "./App";

const client = new ApolloClient({
  uri: "https://petgram-server.frasser.vercel.app/graphql",
});
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
