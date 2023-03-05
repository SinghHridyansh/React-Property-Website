import NavBar from "./components/NavBar";
import "./App.css";
import HouseList from "../src/components/HouseList";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <HouseList />
    </div>
  );
};

export default App;
