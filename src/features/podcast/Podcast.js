import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcasts } from './podcastSlice';
import PodcastList from './components/PodcastList'

 const Podcast = () => {
  const podcasts = useSelector(state => state.podcast.podcasts.podcasts);
  const dispatch = useDispatch();
  const [userPodcasts, setUserPodcasts] = useState([]);
  
  // podcasts.map(podcast => console.log(podcast))

  useEffect(() => {
    dispatch(getPodcasts())
  }, [dispatch])

  return (
    <div>
      <PodcastList list={podcasts}/>
    </div>
  );
}

export default Podcast