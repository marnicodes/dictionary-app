import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    //return props.synonyms; //without map aka a chunk of data
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>; //use of ul,li to display each synonym
        })}
      </ul>
    );
  } else {
    return null;
  }
}
