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



function App() {

  return (
    <div className="App">
      <Router>
        <>
          <HomeNavbar />
          <Routes>
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
              element={<Out />}
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
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
