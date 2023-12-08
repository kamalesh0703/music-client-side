import React, { useEffect } from 'react';
import './WedgetCard.css';
import WedgetEntry from './WedgetEntry';
import { IconContext } from "react-icons/lib";
import {FiChevronRight} from 'react-icons/fi';

function WedgetCard({title,similar,featured,newRelease}) {
  return (
    <div className="widgetcard-container">
      <p className="wedgets-title">{title}</p>
      {
      similar? similar.map((artist) => (
            <WedgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : 
        featured
        ? featured.map((playlist) => (
            <WedgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WedgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
        <div className='wedget-fade'>
          <div className='fade-btn'>
          <IconContext.Provider value={{size:"25px",color:"#c4d0e3"}}>
              <FiChevronRight/>
            </IconContext.Provider>
          </div>
        </div>
    </div>
  )
}

export default WedgetCard;