import React, { useState,useEffect } from 'react';
import apiClient from '../../Spotify';

function Wedgets({artistId}) {
    const [similar,setSimilar]=useState([]);
    const [feature,setFeature]=useState([]);
    const [newRelease,setNewRelease]=useState([]);
    console.log(artistId);
    useEffect(()=>{
    apiClient.get(`artists/${artistId}/related-artists`)
    .then(res =>{
        res.data?.artists?.slice(0,3)
    })
    },[])
  return (
    <div>Wedgets</div>
  )
}

export default Wedgets;