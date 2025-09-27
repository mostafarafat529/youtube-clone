import React, { useState } from 'react'
import "./navbar.css"
import { FaBell, FaSearch, FaVideo , FaCloudUploadAlt  } from 'react-icons/fa'

import image1 from "../../images/Picsart_23-11-30_16-27-05-194.jpg"
import { TfiMenuAlt } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'
import ListSlide from './ListSlide'

const Navbar = () => {

    const navigate = useNavigate("")

    const [toggle_menu ,settoggle_menu] = useState(false);

    console.log(toggle_menu)

return (
<div className='main-nav'>
    
    <div className='logo-left'>
    {/* <TfiMenuAlt size={20} style={{cursor:"pointer"}} onClick={()=>settoggle_menu(!toggle_menu)} /> */}
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="logo" style={{ width: "25px" , margin:"18px" ,cursor:"pointer"}} onClick={()=>navigate("/")} />
    <h2 style={{ margin: 0, fontWeight: "bold"  , cursor:"pointer" }} onClick={()=>navigate("/")}>VidTube</h2>
    </div>


    <div className='logo-middle'>
    <div className='search-box'>
        <input type="text" placeholder="Search"/>
        <FaSearch className='icon-search' style={{cursor:"pointer"}} />
    </div>
    </div>



<div className='logo-right'>
    <FaVideo size={15} className='cam m-2' style={{cursor:"pointer" , color:"red"}} />
    <FaBell size={15} className='msg m-2'  style={{cursor:"pointer"}}/>
    <TfiMenuAlt size={15} className='menu m-2' style={{cursor:"pointer"}}/>
    <FaCloudUploadAlt size={15}className='upload m-2' style={{cursor:"pointer"}} />
    <img src={image1} alt="profile" style={{ width: "35px" , height:"25px", borderRadius: "50%" , cursor:"pointer" }} />
    </div>

{toggle_menu && (
<ListSlide/>
)}
</div>
)
}

export default Navbar