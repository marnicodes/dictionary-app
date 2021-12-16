import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <section className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen
      </a>

      <div id="text">[{props.phonetic.text}]</div>
    </section>
  );
}
