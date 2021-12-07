import logo from "./ma-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="App-logo" alt="logo" className="img-fluid" />
      </header>
      <Dictionary />
    </div>
  );
}
