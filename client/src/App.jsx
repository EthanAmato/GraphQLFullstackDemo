import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { InMemoryCache, ApolloProvider, HttpLink, from, } from "@apollo/client"
import { ApolloClient } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';
import UserForm from './components/UserForm';

//function that tells program what to do if there are any errors
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL Error ${message} at ${location} on path ${path}`)
    });
  }
})
//set up where to go/what to do if there are errors and, otherwise, where to find the graphql server
const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:5000/graphql"})
])


//To make ApolloClient in react, you need to create a connection with graphql at the topmost component
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


function App() {

  return (
    <ApolloProvider client={client}>
      <UserForm/>
      <GetUsers/>
    </ApolloProvider>
  )
}

export default App
