import React from 'react'
import VideoHome from './VideoHome'
import RecommendVideo from './RecommendVideo'
import { useParams } from 'react-router-dom'
import "./mainvideo.css"
const MainVideo = ({category}) => {
  const {ID }  =useParams();
  return (
    <div className='content-videos'>
        <VideoHome ID={ID}/>
        <RecommendVideo category ={category}/>
    </div>
  )
}

export default MainVideo