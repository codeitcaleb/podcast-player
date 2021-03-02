import React, { useState, useEffect } from 'react'
import AudioPlayer from '../components/audio-player/AudioPlayer'
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentlyPlaying, updatePlaying  } from '../podcastSlice';

// Each Row should be draggable. Add library to manage this.

const PodcastRow = ({podcast}) => {
    return (
        <li>
            <div className="podcast">
                {/* <img src={podcast.image} /> */}
                <h1 className="podcast-title">{podcast.title}</h1>
                <h2 className="podcast-name">{podcast.name}</h2>
                <p className="podcast-description">{podcast.description}</p>
              </div>

              <AudioPlayer
                    podcast={podcast}
                    // autoplay={false}
              />
        </li>
    )
}

export default PodcastRow