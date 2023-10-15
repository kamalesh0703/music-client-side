import React,{useEffect,useState} from "react";
import "./Home.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Library from "../Library/Library";
import Feed from '../Feed/Feed.js';
import Favourites from '../Favourites/Favourites.js';
import Slidebar from '../Slidebar/SideBar.js';
import Player from '../Player/Player.js';
import Trending from '../Trending/Trending.js';
import { setClientToken } from "../../Spotify";
import Login from "../Login/Login";
function Home() {
  const [token,setToken]=useState('');

  useEffect(()=>{
    const token=window.localStorage.getItem('token');
    const hash=window.location.hash;
    window.location.hash="";
    if(!token && hash){
      const _token=hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
    }
  },[])
  return !token?(
    <Login/>
  ): (
      <Router>
        <div className="main-body screen-container">
          <Slidebar />
          <Routes>
            <Route path="/Library" element={<Library/>}></Route>
            <Route path="/" element={<Feed/>}></Route>
            <Route path="/Favourites" element={<Favourites />}></Route>
            <Route path="/Player" element={<Player />}></Route>
            <Route path="/Trending" element={<Trending />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default Home;
