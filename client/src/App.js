import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import NavbarHome from './navigation/HomeNavbar';


function App() {
  //  const [currentPage, setCurrentPage] = useState("Home")
  return (
    <div className="App">
      <Router>
        <>
        <HomeNavbar/>
          <Navbar />
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
              path='/Greece'
              element={<Greece/>}
            />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
