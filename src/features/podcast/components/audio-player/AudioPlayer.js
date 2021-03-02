import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Play from "./Play";
import Pause from "./Pause";

import { selectCurrentlyPlaying, updatePlaying  } from '../../podcastSlice';
import useAudioSettings from './useAudioSettings';

const AudioPlayer = ({podcast}) => { 
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);

  let { playing, setPlaying } = useAudioSettings(podcast.title);
  const dispatch = useDispatch();

  useEffect(() => { 
    if (playing && podcast.title !== currentlyPlaying) {
        setPlaying(false)
    } 
  }, [currentlyPlaying, playing])

  const handlePlay = () => {
        setPlaying(true)
        dispatch(updatePlaying(podcast.title))
  }

  if (podcast) {
        return (
            <div className="player">
              <audio id={podcast.title}>
                <source src={podcast.audio} />
              </audio>

              <div className="controls">

                {playing ? 
                  <Pause handleClick={() => setPlaying(false)} /> : //was false
                  <Play handleClick={handlePlay} />
                }
              </div>
            </div>
          ); 
    } 
}

export default AudioPlayer