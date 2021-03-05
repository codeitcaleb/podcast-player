import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import AudioPlayer from '../audio-player/AudioPlayer'
import '../../../../App.css'
import noImg from './images/no-img.jpg'
// Each Row should be draggable. Add library to manage this.

const PodcastRow = ({podcast, id}) => {
    return (
        <Draggable key={podcast.title} draggableId={podcast.title} index={id}>
            {(provided, snapshot) => {
                return (
                    <div className="podcast-card">
                        <div 
                            className="podcast-row"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                         <div className="podcast-details">
                            <div>
                                <img className="podcast-image" src={podcast.image !== "" ? podcast.image : noImg} alt={podcast.title} />    
                            </div>
                            
                            <div className="details-block">
                                <h4 className="podcast-title">{podcast.title}</h4>
                                <h3 className="podcast-name">{podcast.name}</h3>
                                <p className="podcast-description">{podcast.description}</p>
                            </div>

                            <AudioPlayer
                                podcast={podcast}
                                // autoplay={false}
                            />
                        </div>
                    </div>
            </div>
                )
            }}
        </Draggable>
      
    )
}

export default PodcastRow