import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <section className="Phonetic">
      <div className="row">
        <div className="col">
          <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
        </div>
        <div className="col">
          <h1>[{props.phonetic.text}]</h1>
        </div>
      </div>
    </section>
  );
}
