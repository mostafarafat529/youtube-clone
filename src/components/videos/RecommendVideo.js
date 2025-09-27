import React, { useEffect, useState } from 'react'
// import image1 from "../../images/Picsart_23-11-30_16-27-05-194.jpg"
import { convertviews } from '../../data/data';
import { useNavigate } from 'react-router-dom';
import "./recommend.css"

const RecommendVideo = ({category}) => {


const api_key = process.env.REACT_APP_API_KEY;


  const [recommendvideos ,setrecommendvideos] = useState([]);
  const Navigate = useNavigate("");

  const recovideos = async ()=>{
    try{

      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${api_key}`
      await fetch(url).then((res)=>res.json()).then((data)=>{
        if(data.items && data.items.length > 0){
          console.log("unable on contain data") ;
          console.log(data.items[0])
          setrecommendvideos(data.items)
        }else{
          setrecommendvideos([]);
        }
      }
    )
      }
      catch(e){
        console.log({error:e})
      }
    }
  useEffect(()=>{
recovideos();
  },[])

  return (
    <div className='recommendition'>
      {recommendvideos.map((item,index)=>(
        <div className='side-video' onClick={()=>Navigate(`/mainvideo/${item.id}`)} key={index}>
        <img src={item.snippet.thumbnails.medium.url} alt='...' />
        <div className='video-info'>
          <h4 style={{fontSize:"16px" ,fontWeight:"bold" , marginBottom:"5px"}}>{item.snippet.title.slice(0,40)}</h4>
          <p>{item.snippet.channelTitle}</p>
          <p>{convertviews(item.statistics.viewCount)} views</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default RecommendVideo