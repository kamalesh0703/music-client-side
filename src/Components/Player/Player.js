import React, { useEffect, useState } from 'react';
import './Player.css';
import {useLocation} from 'react-router-dom';
import apiClient from '../../Spotify';
import SongCard from '../Songcard/SongCard';
import Queue from '../queue/Queue';

function Player() {
  const location=useLocation();
  const [tracks,setTracks]=useState([]);
  const [currentTrack,setCurrentTrack]=useState({});
  const [currenIndex,setCurrentIndex]=useState(0);
useEffect(()=>{
  if(location.state){
    apiClient.get(`/playlists/${location.state.id}/tracks`)
    .then((res)=> {
    setTracks(res.data.items);
    setCurrentTrack(res.data.items[0].track);
     } )
  }
},[location.state])
  return (
    <div className='player-container'>
      <div className='left-player-container'>ds</div>
      <div className='right-player-container'>
        <SongCard album={currentTrack.album}/>
        <Queue/>
      </div>
    </div>
  )
}
export default Player;