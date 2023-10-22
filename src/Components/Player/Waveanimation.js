import React from 'react';
import './Waveanimation.css';

function Waveanimation({isPlaying}) {
    const waveClass=isPlaying?"box active1":"box";
  return (
    <div className='waveanimation-container'>
        <div className={`${waveClass} box1`}></div> 
        <div className={`${waveClass} box2`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
        <div className={`${waveClass} box2`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
    </div>
  )
}

export default Waveanimation;