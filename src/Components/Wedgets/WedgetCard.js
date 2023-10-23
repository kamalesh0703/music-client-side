import React from 'react';
import './WedgetCard.css';
import WedgetEntry from './WedgetEntry';

function WedgetCard({title,similar,feature,newRelease}) {
    console.log(feature)
  return (
    <div className='wedgetCar-container'>
        <p className='wedgets-title'>{title}</p>
        {similar
        ? similar.map((artist) => (
            <WedgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : feature
        ? feature.map((playlist) => (
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
    </div>
  )
}

export default WedgetCard;