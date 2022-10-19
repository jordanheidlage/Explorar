import Navbar from "./navigation/Navbar";
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
//  const [currentPage, setCurrentPage] = useState("Home")
  return (
    <div className="App">
      <Navbar />
      
      <Home />
      
      {/* currentPage={currentPage} setCurrentPage={setCurrentPage} */}
      
      {/* {
        (() => {
          switch (currentPage) {
            case "Home":
              return <Home />

            case "Greece":
              return <Greece />

            case "Indonesia":
              return <Indonesia />

            case "Italy":
              return <Italy />

            case "Japan":
              return <Japan />

            case "Seychelles":
              return <Seychelles />

            case "Turkey":
              return <Turkey />

            default:
              return <Home />

          }
        })()
      } */}


    </div>
  );
}

export default App;
