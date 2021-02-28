import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './podcastSlice';


 const Podcast = () => {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [userPodcasts, setUserPodcasts] = useState();



  return (
    <div>
      <h1>Podcast</h1>
    </div>
  );
}

export default Podcast