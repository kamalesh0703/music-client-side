import React from 'react';
import './AlbumInfo.css'; 

function AlbumInfo({album}) {
  const artists=[];
  album?.artists?.forEach(element => {
    artists.push(element.name)
  });
  return (
    <div className='albumInfo-container'>
      <div className='albumName-container'>
        <p>{album?.name+ "-"+artists.join(",")}</p>
      </div>
      <div className='album-info'>
        <p>{`${album.name} is an ${album?.album_type} with ${album.total_tracks} track(s)`}</p>
      </div>
      <div className='albumt-release'>
        <p>Release Date: { album?.release_date}</p>
      </div>
    </div>
  )
}

export default AlbumInfo;