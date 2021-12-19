import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="p-3 mb-2 bg-dark bg-gradient">
      <div className="App bg-dark bg-gradient">
        <header className="App-header">
          DICTIO<em>NARY</em>
        </header>
        <Dictionary defaultKeyword="sign" />
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://www.instagram.com/marnikodes/ ">Marni Ali</a> and
            this project is{" "}
            <a href="https://github.com/marnicodes/dictionary-app">
              open-sourced
            </a>{" "}
            and <a href="https://eloquent-payne-de95f8.netlify.app">hosted</a>.
          </small>
        </footer>
      </div>
    </div>
  );
}
