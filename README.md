### 📝 Table of Contents
- [About](#about)
- [SPA Architecture & Data Flow](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>
The Podcast Player allows a user to choose from a fixed list of podcasts and create their own playlist by dragging a podcast over from the left list to the right list. Podcasts in the left list can be played by pressing the play button and paused by pressing it again. When podcasts are dragged over to the right list from the left list, it is removed from the the left list and added to the right list. When a user drags a podcast outside of the boundaries of the right list, it is removed from the removed from the right list and added back to the left list.

### SPA Architecture and Data Flow <a name = "spa_arcitecture"></a>
Podcast Player is a Single-Page Application (SPA) built in React where the data is rendered dynamically upon completion of the fetch request from the AsyncThunk in the Redux Store (in podcastSlice.js) and stored as global state. State is then updated by passing the current state, triggering the actions in the reducer (updatePlaying, updatePlaying/Podcast, reorder/updateSelectedPodcast) with the new data (action/payload). The Components connected to the store receive this new data and re-renders to display the update.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
To run this application, you will need the following (if not already installed:

* Node.js - (https://nodejs.org/en/download/)
* npm - (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installing & Starting the Application <a name = "installing_starting"></a>
To install the required libraries necessary to run this application, run the following command.

```
npm install && npm start
```

## ⛏️ Built Using <a name = "built_using"></a>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

- [React](https://reactjs.org/) - Web Framework
- [Redux](https://redux.js.org/) - Global State Container
[Redux Toolkit](https://redux-toolkit.js.org/) - Toolset companion to Redux
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Drag and Drop Lists in React
- [NodeJs](https://nodejs.org/en/) - JavaScript Runtime Environment
- [npm](https://www.npmjs.com/) - Node Package Manager
