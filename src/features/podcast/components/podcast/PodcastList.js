import React, {useState} from 'react'
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import PodcastRow from './PodcastRow'

const PodcastList = ({list}) => {

    return (
        <>
            {list && list.length && list.map((podcast, index) => (
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