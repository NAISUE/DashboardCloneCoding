import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import MainDash from "./MainDash/MainDash";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <div></div>
      </div>
    </div>
  );
}

export default App;
