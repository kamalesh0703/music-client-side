import React from 'react'

function WedgetEntry({image,title,subtitle}) {
    console.log("titel",title,"subtitle,",subtitle)
  return (
    <div className='wedgetEntry-container'>
         <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default WedgetEntry