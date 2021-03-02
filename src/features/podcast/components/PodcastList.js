import React, {useState} from 'react'
import {DragDropContext, Droppable } from 'react-beautiful-dnd'
import PodcastRow from './PodcastRow'

const PodcastList = ({list}) => {
    const [userPodcasts, setUserPodcasts] = useState([]);

    return (
        <div>
            {/* <DragDropContext>
                <Droppable>
                    {(provided) => ( */}
                        <ul className="left-list">
                            {list && list.length && list.map(podcast => (
                                    <PodcastRow 
                                        key={podcast.title} 
                                        podcast={podcast} 
                                    />
                                )
                            )}
                
                        </ul> 
                    )
                        
                    })
                {/* </Droppable>
            </DragDropContext> */}
        </div>
    )
}

export default PodcastList