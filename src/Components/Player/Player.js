import React, { useEffect, useState } from 'react';
import './Player.css';
import {useLocation} from 'react-router-dom';
import apiClient from '../../Spotify';
import SongCard from '../Songcard/SongCard';
import Queue from '../queue/Queue';
import AudioPlayer from './AudioPlayer';
import Wedgets from '../Wedgets/Wedgets';

function Player() {
  const location=useLocation();
  const [tracks,setTracks]=useState([]);
  const [currentTrack,setCurrentTrack]=useState({});
  const [currentIndex,setCurrentIndex]=useState(0);
useEffect(()=>{
  if(location.state){
    apiClient.get(`/playlists/${location.state.id}/tracks`)
    .then((res)=> {
    setTracks(res.data.items);
    setCurrentTrack(res.data.items[0].track);
     } )
  }
},[location.state])
useEffect(()=>{
  setCurrentTrack(tracks[currentIndex]?.track);
},[currentIndex, tracks])
  return (
    <div className='player-container'>
      <div className='left-player-container'>
        <AudioPlayer currentTrack={currentTrack}
         isPlaying={true}
         setCurrentIndex={setCurrentIndex}
         currentIndex={currentIndex}
         total={tracks}/>
         <Wedgets artistID={currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className='right-player-container'>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}
export default Player;