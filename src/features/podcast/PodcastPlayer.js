import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux';
import { 
  getPodcasts,
  getAllPodcasts,
  updatePodcast, 
  updateSelectedPodcasts,
  reorderSelectedPodcasts,
  selectUnselectedPodcasts, 
  selectAllSelectedPodcasts, 
  selectPodcastStatus 
} from './podcastSlice';
import PodcastListWrapper from './components/podcast/PodcastListWrapper'
import '../../App.css'

 const PodcastPlayer = () => {
  const allPodcasts = useSelector(getAllPodcasts);
  const unselectedPodcasts = useSelector(selectUnselectedPodcasts);
  const selectedPodcasts = useSelector(selectAllSelectedPodcasts);
  const podcastStatus = useSelector(selectPodcastStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (podcastStatus === "idle") {
      dispatch(getPodcasts())
    }
  }, [podcastStatus, dispatch])

  useEffect(() => {
    if (selectedPodcasts !== [] ) {
      dispatch(updateSelectedPodcasts)
    }
  }, [selectedPodcasts, dispatch])

  const reorder = (list, startIndex, endIndex) => {
    // console.log(list)
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    
    // console.log(result)
    return result;
  }

  const handleDrag = ({ source, destination, draggableId }) => {
    console.log({ source, destination, draggableId })
    const selectedPodcast = allPodcasts.find((podcast) => podcast.title === draggableId)
    console.log(selectedPodcast)

    if (source.droppableId === "left-list" && !destination) {
      console.log("left to none")
      return;
    } else if (source.droppableId === "right-list" && (!destination || destination.droppableId === "left-list")) {
      console.log("right to none or left")
      dispatch(updatePodcast(selectedPodcast));
    } else if (source.droppableId === "left-list" && destination?.droppableId === "right-list") {
      console.log("left to right")
      dispatch(updatePodcast(selectedPodcast));
      dispatch(updateSelectedPodcasts(selectedPodcast))
    } else if (source.droppableId === "right-list" && destination.droppableId === "right-list") {
      console.log("right to right")
      const reorderedList = reorder(
        selectedPodcasts,
        source.index,
        destination.index
      );
      dispatch(reorderSelectedPodcasts(reorderedList))
    }

  /*
    if (source.droppableId === "left-list" && !destination) {
      return;
    }
    
    if (source.droppableId === "left-list" && destination?.droppableId === "right-list") {
      
      dispatch(updatePodcast(selectedPodcast))
      dispatch(updateSelectedPodcasts(selectedPodcast))
    } else if (destination && source.droppableId === destination.droppableId && source.droppableId !== "left-list") {
      const reorderedList = reorder(
          selectedPodcasts,
          source.index,
          destination.index
        );

      dispatch(reorderSelectedPodcasts(reorderedList))
    } else if (source.droppableId === "right-list" && destination?.droppableId !== "right-list") {
      dispatch(updatePodcast(selectedPodcast));
      return;
    } else {
      return
    }
    */
  }

  return (
    <div className="podcast-container" >
      <DragDropContext onDragEnd={result => handleDrag(result)} >
        <PodcastListWrapper podcasts={unselectedPodcasts} droppableId="left-list" />
        <PodcastListWrapper podcasts={selectedPodcasts} droppableId="right-list" />
      </DragDropContext>

    </div>
  );
}

export default PodcastPlayer



