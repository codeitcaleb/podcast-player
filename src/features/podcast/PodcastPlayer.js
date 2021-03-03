import React, { useState, useEffect } from 'react';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux';
import { getPodcasts, selectPodcasts } from './podcastSlice';
import PodcastList from './components/podcast/PodcastList'

 const PodcastPlayer = () => {
  const [userPlaylist, setUserPlaylist] = useState([]);

  const podcasts = useSelector(selectPodcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcasts())
  }, [dispatch])

  useEffect(() => {
    if (userPlaylist.length !== []) {
      // console.log(userPlaylist)
    }
  }, [userPlaylist])

  const onDragEnd = (result, userPlaylist, setUserPlaylist) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
           
      let selectedPodcast = podcasts.find((podcast) => podcast.title === draggableId)
      
      console.log(selectedPodcast)
      userPlaylist && userPlaylist.length && setUserPlaylist([...userPlaylist, selectedPodcast])
      
    } else {
      console.log(result)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>
      <DragDropContext onDragEnd={result => onDragEnd(result)} >

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Droppable droppableId="left-list">
              {(provided, snapshot) => {
                return (

                  <ul 
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="left-list"
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                      padding: 4,
                      margin: 8,
                      width: 500,
                      minHeight: 500
                    }}
                  >
                    <PodcastList list={podcasts}/>
                    {provided.placeholder}
                  </ul>
                )
              }}
            </Droppable>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Droppable droppableId="right-list" >
              {(provided, snapshot) => {
                return (
                  <ul 
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="right-list"
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                      padding: 4,
                      margin: 8,
                      width: 500,
                      minHeight: 500
                    }}
                  >
                    <PodcastList list={userPlaylist}/>
                    {provided.placeholder}
                  </ul>
                )
              }}
            </Droppable>
        </div>
        
      </DragDropContext>
      
    </div>
  );
}

export default PodcastPlayer