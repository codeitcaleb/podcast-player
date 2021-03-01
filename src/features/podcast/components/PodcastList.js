import React from 'react'
import PodcastCard from './PodcastCard'

const PodcastList = ({list}) => {
    // const podcasts = Object.values(list)

    console.log(list)

    return (
        <div>
            <ul>
                {list && list.length && list.map(podcast => (
                        <PodcastCard key={podcast.title} podcast={podcast} />
                    )
                 )}
            </ul>
        </div>
    )
}

export default PodcastList