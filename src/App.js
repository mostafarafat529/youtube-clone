import { Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";
// import VideoHome from "./components/videos/VideoHome";
import Navbar from "./components/navbar/Navbar";
import MainVideo from "./components/videos/MainVideo";
import { useState } from "react";
function App() {

  const [category ,setcategory] = useState(0)


  return (
    <div className="App">
      <Navbar/>
<Routes>
  <Route path="/" element={<Home category={category} setcategory={setcategory}/>}/>
  <Route path="/mainvideo/:ID" element={<MainVideo category={category}/>}/>
</Routes>
    </div>
  );
}

export default App;
