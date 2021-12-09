export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (
        definition,
        index //loop through definition to render words with more definitions
      ) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
