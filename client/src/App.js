import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeNavbar from "./navigation/HomeNavbar";
import Home from "./Home";
import In from "./forms/In";
import Out from "./forms/Out";
import Greece from "./pages/Greece"
import Indonesia from "./pages/Indonesia";
import Italy from "./pages/Italy";
import Japan from "./pages/Japan";
import Seychelles from "./pages/Seychelles";
import Turkey from "./pages/Turkey";
import Profile from "./pages/Profile"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import SignupForm from './forms/SignupForm';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './Navbar';
// import Italy from './pages/Italy'
// import Home from './Home';
import { useState } from 'react';
// import login from '.login';
// import logout from './logout';
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

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Router>
        <>
          <HomeNavbar />
          <Routes>
            <Route
            path='/signup'
            element={<SignupForm />}
            />
            <Route
            path='/profile'
            element={<Profile />}
            />
            <Route
              path='/Home'
              element={<Home />}
            />
            <Route
              path='/In'
              element={<In />}
            />
            <Route
              path='/Out'
              element={<Home />}
            />
            <Route
              path='/Greece'
              element={<Greece />}
            />
            <Route
              path='/Indonesia'
              element={<Indonesia />}
            />
            <Route
              path='/Italy'
              element={<Italy />}
            />
            <Route
              path='/Japan'
              element={<Japan />}
            />
            <Route
              path='/Seychelles'
              element={<Seychelles />}
            />
            <Route
              path='/Turkey'
              element={<Turkey />}
            />
            <Route
            path='/Signup'
            element={<Profile />}
            />
          </Routes>
        </>
      </Router>

=======
    </div>
    </ApolloProvider>
  );
}

export default App;
