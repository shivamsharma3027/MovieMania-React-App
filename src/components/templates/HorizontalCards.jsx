import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%]  flex  overflow-y-hidden mb-5 p-5">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          className="mr-5 h-[35vh] bg-zinc-900  min-w-[15%] mb-5"
          key={i}
        >
          <img
            className="w-full rounded-md  h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />

          <div className="text-white p-3 h-[45%] overflow-y-auto">
            <h1 className="   text-xl font-semibold ">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className=" ">
              {d.overview.slice(0, 30)}...
              <span className="text-zinc-300">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
