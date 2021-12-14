import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <h1>/{props.phonetic.text}/</h1>
      <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
    </div>
  );
}
