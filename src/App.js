import logo from "./ma-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div class="p-3 mb-2 bg-dark bg-gradient">
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img src={logo} id="App-logo" alt="logo" className="img-fluid" />
          </div>
        </header>
        <Dictionary />
      </div>
    </div>
  );
}
