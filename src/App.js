import React from 'react';
import PodcastPlayer  from './features/podcast/PodcastPlayer';

function App() {
  return (
    <div className="App">
        <h1>Podcast Player</h1>

        <p id="instructions">1. To add to playlist, drag a podcast from the left list into the right list.</p>
        <p id="instructions">2. To remove from playlist, drag a podcast out of the right list to remove it.</p>

        <PodcastPlayer />
    </div>
  );
}

export default App;
