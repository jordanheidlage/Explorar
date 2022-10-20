import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Italy from './pages/Italy'
import Home from './Home';
import { useState } from 'react';
// import Greece from './pages/Greece';
// import Indonesia from './pages/Indonesia';
// import Italy from './pages/Italy';
// import Japan from './pages/Japan';
// import Seychelles from './pages/Seychelles';
// import Turkey from './pages/Turkey';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {
        (() => {
          switch (currentPage) {
            case "Home":
              return <Italy />

            // case "":
            //   // return < />

            // case "":
            //   // return < />

            // case "":
            //   // return < />

            default:
              return <Italy />

          }
        })()
      }
    </div>
    </ApolloProvider>
  );
}

export default App;
