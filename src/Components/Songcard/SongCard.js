import React, { useEffect } from 'react';
import './SongCard.css';
import AlbumImage from './AlbumImage';
import AlbumInfo from './AlbumInfo';

function SongCard({album}) {

  return (
    <div className='song-card-container'>
      <AlbumImage  url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard;