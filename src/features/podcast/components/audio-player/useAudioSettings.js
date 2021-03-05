import { useState, useEffect } from "react";

const useAudioSettings = (title) => {
  let audio = document.getElementById(title);
  const [playing, setPlaying] = useState(false);
  
  useEffect(() => {
    if (!audio) {
      return;
    }

    // React state listeners: update DOM on React state changes
    if (playing) {
      try {
        audio && audio.play() 
      } catch(err) {
        console.error(err.message)
      }} else {
      try {
        audio && audio.pause()
      } catch(err) {
        console.error(err.message)
      }
    }
  });

  return {
    playing,
    setPlaying
  }
}

export default useAudioSettings;