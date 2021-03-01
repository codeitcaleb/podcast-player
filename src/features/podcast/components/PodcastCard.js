import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

const PodcastCard = ({podcast}) => {
    console.log(podcast)
    return (
        <li>
            <AudioPlayer
                autoplay={false}
                art={podcast.image}
                src={podcast.audio}
            />
        </li>
    )
}

export default PodcastCard