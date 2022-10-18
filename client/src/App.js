import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
// import login from '.login';
// import logout from './logout';
// import Greece from './pages/Greece';
// import Indonesia from './pages/Indonesia';
// import Italy from './pages/Italy';
// import Japan from './pages/Japan';
// import Seychelles from './pages/Seychelles';
// import Turkey from './pages/Turkey';


function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {
        (() => {
          switch (currentPage) {
            case "Home":
              return <Home />

            // case "":
            //   return < />

            // case "":
            //   // return < />

            // case "":
            //   // return < />

            default:
              return <Home />

          }
        })()
      }
    </div>
  );
}

export default App;
