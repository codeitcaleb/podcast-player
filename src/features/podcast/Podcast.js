import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcasts, selectPodcasts } from './podcastSlice';


 const Podcast = () => {
  const podcasts = useSelector(state => state.podcasts);
  const dispatch = useDispatch();
  const [userPodcasts, setUserPodcasts] = useState([]);

  useEffect(() => {
    dispatch(getPodcasts())
  }, [dispatch])


  return (
    <div>
      <h1>Podcast</h1>
    </div>
  );
}

export default Podcast