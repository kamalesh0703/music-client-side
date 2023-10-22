import React from 'react';
import './Queue.css';

function Queue({tracks,setCurrentIndex}) {
  return (
    <div className='queue-container'>
      <div className='queue'>
        <p className='upnext'>Up Next</p>
        <div className='queue-list'>
          {tracks?.map((track,index) => (
            <div className='queue-item' key={index+"kry"} onClick={()=> setCurrentIndex(index)}>
              <p className='track-name'>{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Queue;