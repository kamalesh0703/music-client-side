import React from "react";
import './Controls.css';
import { IconContext } from "react-icons";
import {BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext} from "react-icons/bi";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function Controls({isPlaying,setIsPlaying,handleNext,handlePrev}) {
  return (
    // <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="control-container">
        <div className="action-btn" onClick={handlePrev}>
          <BiSkipPrevious />
        </div>
        <div className={isPlaying ? "play-pause-btn active-btn":"play-pause-btn"} onClick={()=>setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <BiSkipNext />
        </div>
      </div>
   
  );
}

export default Controls;
