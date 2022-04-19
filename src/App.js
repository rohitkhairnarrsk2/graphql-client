import "./App.css";
import {
  ApolloProvider,
} from "@apollo/client";
import client from './GraphQL/client'
import Form from "./Components/Form";
import GetUsers from "./Components/GetUsers";



function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
      <GetUsers />

    </ApolloProvider>
  );
}

export default App;
