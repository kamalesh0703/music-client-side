import React from 'react';
import './ProgressCircle.css';

const Circle=({color,percentage,size,strokeWidth})=>{
  const radius=size/2-10;
  const circ=2 * Math.PI * radius - 20;
  const strokePct=((100 - Math.round(percentage)) *circ)/100;

  return(
    <circle 
    r={radius}
    cx="50%"
    cy="50%"
    fill="transparent"
    stroke={strokePct !== circ ? color:""}
    strokeWidth={strokeWidth}
    strokeDasharray={circ}
    strokeDashoffset={percentage ? strokePct :0}
    strokeLinecap='round'
    ></circle>
  )
}

function ProgressCircle({percentage,isPlaying,size,image,color}) {
  return (
    <div className='progressCircle-container'>
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 20} fill="#FFFffF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 70 } fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active1" : ""}
          x={20}
          y={20}
          width={2 * (size / 2 - 20)}
          height={2 * (size / 2 - 20)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className=".active1"
          x={70}
          y={70}
          width={2 * (size / 2 - 70)}
          height={2 * (size / 2 - 70)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  )
}

export default ProgressCircle;