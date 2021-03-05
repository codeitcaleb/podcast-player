import React from 'react'
import PodcastRow from './PodcastRow'

const PodcastList = ({list, condition}) => {
    // console.log(list)
    return (
        <>
            {list?.length && 
              list.map((podcast, index) => (
                  //podcast.isSelected === condition &&
                    <PodcastRow
                        id={index}
                        key={podcast.title} 
                        podcast={podcast} 
                    />
                )
            )}
        </>                
    )
}

export default PodcastList