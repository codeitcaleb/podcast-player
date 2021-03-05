import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Droppable } from "react-beautiful-dnd";
import PodcastList from './PodcastList';
import { selectAllSelectedPodcasts } from '../../podcastSlice';

const PodcastListWrapper = ({podcasts, droppableId}) => {
  const shouldDisplaySelected = droppableId === "right-list";
  const selectedPodcasts = useSelector(selectAllSelectedPodcasts);

  return (
    <div className={`${droppableId}-container`}>
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => {
                return (
                    <ul 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={droppableId}
                        style={{
                        background: snapshot.isDraggingOver ? "active" : "",
                        }}
                    >
                        <PodcastList 
                            list={podcasts } 
                            condition={shouldDisplaySelected}
                        />
                            {provided.placeholder}
                    </ul>
                )
            }}
            </Droppable>
  </div>
  )
}

export default PodcastListWrapper     