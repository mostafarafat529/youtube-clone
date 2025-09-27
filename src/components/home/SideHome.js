import React, { useEffect, useState } from 'react'
import "./sidehome.css"
// import image1 from "../../images/Picsart_23-11-30_16-27-05-194.jpg"
import { useNavigate } from 'react-router-dom'
import { convertviews } from "../../data/data"
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";



const SideHome = ({category}) => {


const api_key = process.env.REACT_APP_API_KEY;


dayjs.extend(relativeTime);



console.log(api_key)


const [videos ,setvideos]  = useState([])

const fetchdata = async ()=>{
  try{
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=70&regionCode=US&videoCategoryId=${category}&key=${api_key}`
await fetch(url).then((res)=>res.json()).then((data)=>{
  if(data.items && data.items.length > 0){
    setvideos(data.items)
    console.log(data.items[0])
  }else{
console.log("the data not found") ;
  }
});
  }catch(e){
    console.log({e});
  }
}
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(()=>{
fetchdata();
},[category])

  const navigate = useNavigate("");
  return (
<div className='content'>
  {videos && videos.length > 0 ? (
    videos.map((item)=>(
      <div className='card' onClick={()=>navigate(`/mainvideo/${item.id}`)}>
      <img src={item.snippet.thumbnails.medium.url} class="card-img-top" alt="..."/>
        <h3>{item.snippet.title}</h3>
        <h5 >{item.snippet.channelTitle}</h5>
        {/* writting .................. the library and understand */}
        <p>{convertviews(item.statistics.viewCount)} views &bull;     {dayjs(item.snippet.publishedAt).fromNow()}</p> 
    </div>
    ))

  ):(<p>loading......</p>)}

</div>
  )
}

export default SideHome