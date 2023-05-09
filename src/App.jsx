import "./App.css";
import Login from "./components/public/Login";
import Navbar from "./components/reusable/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
