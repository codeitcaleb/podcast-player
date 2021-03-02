import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcasts, selectPodcasts } from './podcastSlice';
import PodcastList from './components/PodcastList'

 const PodcastPlayer = () => {
  const podcasts = useSelector(selectPodcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcasts())
  }, [dispatch])

  return (
    <div>
      <PodcastList list={podcasts}/>
    </div>
  );
}

export default PodcastPlayer