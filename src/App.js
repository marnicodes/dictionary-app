import logo from "./ma-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} id="App-logo" alt="logo" className="img-fluid" />
        </div>
      </header>
      <div className="text-center">
        <Dictionary />
      </div>
    </div>
  );
}
