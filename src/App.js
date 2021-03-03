import React from 'react';
import logo from './logo.svg';
import PodcastPlayer  from './features/podcast/PodcastPlayer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PodcastPlayer />
      {/* </header> */}
    </div>
  );
}

export default App;
