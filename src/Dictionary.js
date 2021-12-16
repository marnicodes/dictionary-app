import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  //keep track of component loading state as
  //by default it is not loading. Hence, "false".

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true); //to show loaded code below
    search(); //but at the same search for the keyword (in state)
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 id="heading">What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">suggested words: field, sunrise, jazz...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load(); //if it is NOT loading, the function load will set it to "true" (look at load function)
    return "Loading";
  }
}
