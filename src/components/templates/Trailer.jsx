import React from "react";
import { useLocation,Link,useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

function Trailer() {
  const navigate=useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  return (
    <div className="top-0 left-0 z-50 bg-[rgba(0,0,0,.8)] absolute w-screen h-screen flex items-center justify-center">
       <Link
                className="hover:text-[#6556cd] ri-close-fill absolute text-3xl text-white right-[5%]  top-[5%] "
                onClick={() => navigate(-1)}
              ></Link>
      {ytvideo ? (
        <ReactPlayer
        height={600}
        width={1100}
        controls
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
      ) : (
        <p className="text-white">No video available</p>
      )}
    </div>
  );
}

export default Trailer;
