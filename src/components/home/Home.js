// import React, { useState } from 'react'
import "./home.css"
import Slider from '../slider/Slider'
import SideHome from './SideHome'
const Home = ({category , setcategory}) => {

  // const [category ,setcategory] = useState(0)

  return (
<>
<div className='' style={{display:"flex" , gap:"20px"}}>
<Slider category={category} setcategory = {setcategory}/>
<SideHome category = {category} />
</div>
</>
  )
}

export default Home