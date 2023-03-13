import React from 'react'
import "./TrackSearchResult.css";

const TrackSearchResult = ({track}) => {
  return (
    <div className='container'>
       <img src={track.albumUri} style={ { height: "64px", width: "64px"}} alt="" />
            <div>{track.artist}</div>
            <div>{track.title}</div>

        
    </div>
  )
}

export default TrackSearchResult