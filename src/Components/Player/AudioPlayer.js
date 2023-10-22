import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";
import ProgressCircle from "./ProgressCircle";
import Waveanimation from "./Waveanimation";
import Controls from "./Controls";

function AudioPlayer({ currentTrack,currentIndex,setCurrentIndex,total }) {
  const [isPlaying,setIsPlaying]=useState(false);
  const [trackProcress,setTrackProcess]=useState(0);
  const audioSrc=total[currentIndex]?.track.preview_url;
  const audioRef=useRef(new Audio(total[0]?.track.preview_url));
  const intervelRef=useRef();
  const isReady=useRef(false)
  const {duration}=audioRef.current;
  const currentPercentage=duration ?(trackProcress/duration)*100:0;
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
const handleNext=()=>{
  if(currentIndex < total.length -1){
    setCurrentIndex(currentIndex +1);
    console.log("ehlejodf")
  }
  else{
    setCurrentIndex(0)
  }
}
const handlePrev=()=>{
  if(currentIndex -1 <0) setCurrentIndex(total.length -1);
  else setCurrentIndex(currentIndex-1)
}
  const startTimer=()=>{
    clearInterval(intervelRef.current)
    intervelRef.current = setInterval(()=>{
      if(audioRef.current.ended){
        handleNext();
      }else{
        setTrackProcess(audioRef.current.currentTime)
      }
    },[1000])
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
         audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervelRef.current);
        audioRef.current.pause();
      }
    } else {
      if (!isPlaying) {
        audioRef.current = new Audio(audioSrc);
       isPlaying && audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervelRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(()=>{
    audioRef.current.pause();
    audioRef.current=new Audio(audioSrc)

    setTrackProcess(audioRef.current.currentTime)
    if(isReady.current){
    isPlaying && audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
    else{
      isReady.current=true;
    }
  },[currentIndex])
  
  useEffect(()=>{
    return()=>{
      audioRef.current.pause();
      clearInterval(intervelRef.current)
    }
},[]);
const addZero=(n)=>{
  return n>9? ""+n:"0"+n;
}
useEffect(()=>{
})
  return (
    <div className="audioPlayer-container">
      <div className="player-left-container">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={isPlaying}
          image={currentTrack?.album?.images[0]?.url}
          size={230}
          color="#c96850"
        />
      </div>
      <div className="player-right-body">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join("|")}</p>
        <div className="player-right-botom">
        <div className="song-duration">
          <p className="duration">0:{addZero(Math.round(trackProcress))}</p>
           <Waveanimation isPlaying={isPlaying}/>
          <p className="duration">0:30</p>
        </div>
        <Controls
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        handleNext={handleNext}
        handlePrev={handlePrev}
        total={total}
        />
      </div>
        </div>
    </div>
  );
}

export default AudioPlayer;
