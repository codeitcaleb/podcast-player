import React, { useState, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import AudioPlayer from '../audio-player/AudioPlayer'

// Each Row should be draggable. Add library to manage this.

const PodcastRow = ({podcast, id}) => {
    return (
        <Draggable key={podcast.title} draggableId={podcast.title} index={id}>
            {(provided, snapshot) => {
                return (
                    <li>
                        <div 
                            className="podcast-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        //     style={{ 
                        //     // userSelect: 'none',
                        //     // padding: 16,
                        //     // margin: '0 0 8px 0',
                        //     minHeight: '50px',
                        //     // backgroundColor: snapshot.isDragging ? 'yellow' : "lightblue",
                        //     // ...provided.draggableProps
                        // }}
                            
                        >
                            {/* <img className="podcast-image" src={podcast.image} /> */}
                            <h1 className="podcast-title">{podcast.title}</h1>
                            <h2 className="podcast-name">{podcast.name}</h2>
                            <p className="podcast-description">{podcast.description}</p>

                            <AudioPlayer
                                podcast={podcast}
                                // autoplay={false}
                            />
                        </div>
            </li>
                )
            }}
        </Draggable>
      
    )
}

export default PodcastRow