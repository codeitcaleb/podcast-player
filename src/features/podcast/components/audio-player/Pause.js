import React from "react";
import { PauseCircleFilled } from "@material-ui/icons";

const Pause = ({ handleClick }) =>  {
  
  return (
    <button className="player-button" onClick={() => handleClick()}>
      <PauseCircleFilled />
    </button>
  );
}

export default Pause