import React, { useEffect, useState } from 'react'
import "./videohome.css"
import { FaShare } from 'react-icons/fa'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { MdSaveAlt } from 'react-icons/md'
import { convertviews } from '../../data/data'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import image from "../../images/pngtree-user-profile-avatar-png-image_10211467.png"


const VideoHome = ({ID}) => {

const api_key = process.env.REACT_APP_API_KEY;



dayjs.extend(relativeTime);

// collections the states 
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const [infovideo , setinfovideo] = useState(null)
const [channeldata ,setchanneldata] = useState(null)
const [comment ,setcomment] = useState([]);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// request for api  ..........................................................

// information the videos such title ,puplisher , countlike , ..... 
const fetch_apidata_video = async () => {
  try {
    const url_data_video = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ID}&key=${api_key}`;
await fetch(url_data_video).then((res)=>res.json()).then((data)=>{

  if (data?.items && data?.items?.length > 0) {
    setinfovideo(data.items[0]);
  } else {
    console.warn("No video data found for this ID");
    setinfovideo(null);
  }
})
  } catch (err) {
    console.error("Error fetching video data:", err);
    setinfovideo(null);
  }
};
// .............................................................................




const fetch_other_data = async () => {
  try {
    const url_channel_video = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${infovideo?.snippet?.channelId}&key=${api_key}`;
    const channelRes = await fetch(url_channel_video);
    const channelData = await channelRes.json();
    if (channelData.items && channelData.items.length > 0) {
      setchanneldata(channelData.items[0]);
    } else {
      console.warn("No channel data found");
      setchanneldata(null);
    }

    const url_comments_channel = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${ID}&key=${api_key}`;
    const commentsRes = await fetch(url_comments_channel);
    const commentsData = await commentsRes.json();
    if (commentsData.items && commentsData.items.length > 0) {
      setcomment(commentsData.items);
    } else {
      console.warn("No comments found");
      setcomment([]);
    }
    
  } catch (err) {
    console.error("Error fetching channel or comments:", err);
    alert("Error fetching data, please check the API Key or ID.");
  }
};

// .............................................................................






  useEffect(()=>{
fetch_apidata_video()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ID])

  useEffect(()=>{
    fetch_other_data()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[infovideo])
  


  return (
    <div className='play-video'>
<iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${ID}`}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h2 style={{fontSize:"22px" ,fontWeight:"600" ,margin:"10px 0"}}>{infovideo?.snippet?.title}</h2>
  <div className="video-info">
          <span>{convertviews(infovideo?.statistics?.viewCount)} Views • {dayjs(infovideo?.snippet?.publishedAt).fromNow()}</span>
          <div className="video-actions">
            <span className="action"> <BiSolidLike /> {convertviews(infovideo?.statistics?.likeCount)}</span>
            <span className="action"> <BiSolidDislike /> 2</span>
            <span className="action"> <FaShare/> Share</span>
            <span className="action"> <MdSaveAlt /> Save</span>
          </div>
      </div>
<hr ></hr>


<div className='publisher'>
{channeldata?.snippet?.thumbnails?.default?.url && (
  <img src={channeldata.snippet.thumbnails.default.url} alt="channel logo" />
)}
  <div>
    <p>{infovideo?.snippet?.channelTitle}</p>
    <span>{convertviews(channeldata?.statistics?.subscriberCount)} Subscribe</span>
  </div>
  <button>subscripe</button>
</div>

<div className='video-desc'>
  <p>{infovideo?.snippet?.localized?.description.slice(0,300)}</p>
  <hr />
  <h3>{convertviews(infovideo?.statistics?.commentCount)} Comments</h3>


   {comment.map((item, index) => (
  <div className="comment" key={index}>
      <img   src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || image} alt="..."/>
      <div>
        <h3>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName} <span>{item.time}</span></h3>
        <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
        <div className="comment-action">
<BiSolidLike  style={{fontSize:"18px" ,cursor:"pointer"}}/>
          <span>{convertviews(item?.snippet?.topLevelComment?.snippet?.likeCount)}</span>
<BiSolidDislike style={{fontSize:"18px" ,cursor:"pointer"}} />
        </div>
      </div>
    </div>
  ))}



</div>

    </div>
  )
}

export default VideoHome