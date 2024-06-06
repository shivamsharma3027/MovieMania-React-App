import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
      className="w-full h-[50vh] flex flex-col items-start justify-end p-[5%]"
    >
      <h1 className=" w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className=" w-[70%] mt-3 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white ">
        <i className="ri-megaphone-fill  text-yellow-500"></i>
        {data.release_date || "Soon.."}
        <i className="ri-album-fill ml-5 text-yellow-500"></i>{" "}
        {data.media_type.toUpperCase() || "Show"}
      </p>
      <Link className="bg-[#6353c6] p-4 mt-5 rounded text-white ">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
