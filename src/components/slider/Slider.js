import React, { useState } from 'react'
import "./slider.css"
import { FaHome, FaGamepad, FaCar, FaFootballBall, FaFilm, FaMicrochip, FaMusic, FaBlog, FaNewspaper } from "react-icons/fa";

const Slider = ({setcategory}) => {

  const [active ,setactive] = useState(null);


const lists = [
    { id: 1, cat : 0 , name: "Home", icon: <FaHome />, path: "/home" },
    { id: 2, cat : 20 , name: "Gaming", icon: <FaGamepad />, path: "/gaming" },
    { id: 3, cat : 2 , name: "Automobiles", icon: <FaCar />, path: "/automobiles" },
    { id: 4, cat : 17 , name: "Sports", icon: <FaFootballBall />, path: "/sports" },
    { id: 5, cat : 24 , name: "Entertainment", icon: <FaFilm />, path: "/entertainment" },
    { id: 6, cat : 28 , name: "Technology", icon: <FaMicrochip />, path: "/technology" },
    { id: 7, cat : 10 , name: "Music", icon: <FaMusic />, path: "/music" },
    { id: 8, cat : 22 , name: "Blogs", icon: <FaBlog />, path: "/blogs" },
    { id: 9, cat : 25 , name: "News", icon: <FaNewspaper />, path: "/news" }
  ];




  return (

    <div className='side-bar' >
      <div className='lists p-3'>
      {lists.map((item) => (
          <li  onClick={()=> {setactive(item.id) ; setcategory(item.cat)} } key={item.id} style={{   cursor: "pointer",   display: "flex",   alignItems: "center",
              gap: "12px",padding: "6px 0"}} className={active === item.id ? "active" : ""}  >
            <span className='icons'>{item.icon}</span>
            <span className='nameing'>{item.name}</span>
          </li>
        ))}
      </div>
      <hr/>
      {/* <div className='subscribed p-2'>
        <h1 className=' fs-5 mb-3' style={{color:"#0000009c" , textTransform:"capitalize"}}>subscribed</h1>
        <div className='participate'>
          <img src={image1} alt='..' style={{ width: "40px" , height:"30px", borderRadius: "50%" , cursor:"pointer" }}/>
          <p>mostafa</p>
        </div>
        <div className='participate'>
          <img src={image2} alt='..' style={{ width: "40px" , height:"30px", borderRadius: "50%" , cursor:"pointer" }}/>
          <p>ahmed</p>
        </div>
        <div className='participate'>
          <img src={image1} alt='..' style={{ width: "40px" , height:"30px", borderRadius: "50%" , cursor:"pointer" }}/>
          <p>nada</p>
        </div>
        <div className='participate'>
          <img src={image2} alt='..' style={{ width: "40px" , height:"30px", borderRadius: "50%" , cursor:"pointer" }}/>
          <p>rafat</p>
        </div>
        <div className='participate'>
          <img src={image1} alt='..' style={{ width: "40px" , height:"30px", borderRadius: "50%" , cursor:"pointer" }}/>
          <p>eslam</p>
        </div>
      </div> */}
    </div>
  )
}

export default Slider