import React, { useState, useEffect } from "react";
import apiClient from "../../Spotify";
import "./Library.css";
import { AiFillPlayCircle } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import {useNavigate} from 'react-router-dom';

function Library() {
  const navigation=useNavigate();
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    apiClient.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);

  const playplaylist=(id)=>{
    navigation('/Player',{state:{id:id}});
  }
  return (
    <div className="Library-container">
      {playlists?.map((playlist)=>(
        <div className='playlist-card' key={playlist.id} onClick={()=>playplaylist(playlist.id)}>
          <img src={playlist.images[0].url} alt="" className='playlist-img'/>
           <p className="playlist-title">{playlist.name}</p>
           <p className="playlist-subtitle">
            {playlist.tracks.total} Songs
           </p>
           <div className="playlist-fade">
            <IconContext.Provider value={{size:"30px",color:"#E99d72"}}>
              <AiFillPlayCircle/>
            </IconContext.Provider>
           </div>
        </div>
      ))}
    </div>
  );
}

export default Library;
