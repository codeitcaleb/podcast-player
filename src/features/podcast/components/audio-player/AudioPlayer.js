import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Play from "./Play";
import Pause from "./Pause";

import { selectCurrentlyPlaying, selectAllSelectedPodcasts, updatePlaying, updateSelectedPodcasts  } from '../../podcastSlice';
import useAudioSettings from './useAudioSettings';
import '../../../../App.css'

const AudioPlayer = ({podcast}) => { 
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);
  const selectedPodcasts = useSelector(selectAllSelectedPodcasts);

  let { playing, setPlaying } = useAudioSettings(podcast.title);
  const dispatch = useDispatch();

  useEffect(() => { 
    if (playing && podcast.title !== currentlyPlaying) {
        setPlaying(false)
    } else if (podcast.isSelected && podcast.title === currentlyPlaying) {
        setPlaying(true)
    }
  }, [currentlyPlaying, playing])

  const handlePlay = () => {
        setPlaying(true)
        dispatch(updatePlaying(podcast.title))
  }

  const handlePause = () => {
    console.log(podcast)
      setPlaying(false)
}

  const handleNextPodcast = () => {
    setPlaying(false);
    const currentPodcastIdx = selectedPodcasts.findIndex((p) => p.title === podcast.title);
    const isInPlaylist = !!currentPodcastIdx;

    if (isInPlaylist < 0) {
        return;
    }

    const nextPodcast = selectedPodcasts[currentPodcastIdx + 1];
    if (nextPodcast.isSelected) {
       dispatch(updatePlaying(nextPodcast.title))
       dispatch(updateSelectedPodcasts(nextPodcast))
    } else {
        setPlaying(false)
    }
  }

  if (podcast) {
        return (
            <div className="audio-player">
                <div className="audio-controls">
                <audio loop={false} onEnded={handleNextPodcast} onPause={() => setPlaying(false)} id={podcast.title}>
                    <source src={podcast.audio} />
                </audio>

                    {playing ? 
                    <Pause handleClick={handlePause} /> : //was false
                    <Play handleClick={handlePlay} />
                    }
                </div>
            </div>
          ); 
    } 
}

export default AudioPlayer