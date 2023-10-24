import React, { useState,useEffect } from 'react';
import apiClient from '../../Spotify';
import WedgetCard from './WedgetCard';
import './Wedgets.css';

function Wedgets({artistID}) {
    const [similar,setSimilar]=useState([]);
    const [featured,setFeatured]=useState([]);
    const [newRelease,setNewRelease]=useState([]);
    useEffect(()=>{
      console.log(artistID);
    })
    useEffect(()=>{
      if (artistID) {
        apiClient
          .get(`/artists/${artistID}/related-artists`)
          .then((res) => {
            const a = res.data?.artists.slice(0, 3);
            setSimilar(a);
          })
          .catch((err) => console.error(err));
  
        apiClient
          .get(`/browse/featured-playlists`)
          .then((res) => {
            const a = res.data?.playlists.items.slice(0, 3);
            setFeatured(a);
           
          })
          .catch((err) => console.error(err));
  
        apiClient
          .get(`/browse/new-releases`)
          .then((res) => {
            const a = res.data?.albums.items.slice(0, 3);
            setNewRelease(a);
          })
          .catch((err) => console.error(err));
      }
    },[artistID])
  return (
    <div className='wedget-container'>
      <WedgetCard title="Similar Artist" similar={similar}/>
      <WedgetCard title="Made for you" featured={featured}/>
      <WedgetCard title="New Release" newRelease={newRelease}/>
    </div>
  )
}

export default Wedgets;