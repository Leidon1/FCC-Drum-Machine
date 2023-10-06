import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
  setDescription: (description: string) => void; // Define the setDescription prop
}

const Drum = ({ audioClip, setDescription }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    const audioElement = document.getElementById(
      clip.keyTrigger
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play().catch(console.error);
      setDescription(clip.description); // Call setDescription here
    }
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
