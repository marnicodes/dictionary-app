import logo from "./ma-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="p-3 mb-2 bg-dark bg-gradient">
      <div className="App bg-dark bg-gradient">
        <header className="App-header">
          <div className="container">
            <img src={logo} id="App-logo" alt="logo" className="img-fluid" />
          </div>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/marnicodes/dictionary-app">Marni Ali</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
