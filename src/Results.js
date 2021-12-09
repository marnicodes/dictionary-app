import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            // to return definition: return meaning.definitions[0].definition
            <div key={index} id="meaning">
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
