import React from "react";
import { PlayCircleFilled } from "@material-ui/icons";

const Play = ({handleClick}) => {

  return (
    <button className="player-button" onClick={() => handleClick()}>
      <PlayCircleFilled />
    </button>
  );
}

export default Play