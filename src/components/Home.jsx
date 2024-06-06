import SideNav from "./templates/SideNav"
import TopNav from "./templates/TopNav"
import axios from "../utils/Axios";
import {useState,useEffect} from "react"
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "../components/templates/Dropdown";
import Loading from "./Loading";


const Home = () => {
  document.title="Movie Mania | Homepage"
  const [wallpaper,setWallpaper]=useState(null);
  const [trending,setTrending]=useState(null);
  const [category,setCategory]=useState("all");
  const getHeaderWallpaper=async()=>{
    try{
         const {data}=await axios.get('/trending/all/day');
          let randomData=data.results[(Math.random()*data.results.length).toFixed()]

         setWallpaper(randomData);
    }catch(err){
console.log(err);
    }
  }

const getTrending=async()=>{
  try{
    const {data}=await axios.get(`/trending/${category}/day`);
 

   setTrending(data.results);
  }catch(err){
    console.log(err);
  }
}



  useEffect(() => {
  !wallpaper && getHeaderWallpaper();
   getTrending();
  }, [category])



  console.log(trending);
  return wallpaper&& trending ? (<>
    
    <SideNav/>
    <div className="w-[80%]   overflow-x-hidden ">
      <TopNav/>
      <Header data={wallpaper}/>
      <div className=" flex justify-between p-5">
        <h1 className=" text-3xl font-semibold text-zinc-400 ">Trending</h1>

        <Dropdown title={"filter"} options={['tv','movie','all']} func={(e)=>{setCategory(e.target.value)}}  />

      </div>

      <HorizontalCards data={trending} />
    </div>
  </>):<Loading/>
  
}

export default Home
