import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="p-3 mb-2 bg-dark bg-gradient">
      <div className="App bg-dark bg-gradient">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="twilight" />
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
