
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className=" relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded object-cover h-[40vh] " src={`https://image.tmdb.org/t/p/original/${
          c.poster_path ||  c.backdrop_path ||c.profile_path
        }`} alt="" />
        <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">

          {c.name || c.title || c.original_name || c.original_title}
        </h1>
       { c.vote_average && <div className="text-white right-[-10%] bottom-[25%] absolute text-xl font-semibold   bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center rounded-full">{(c.vote_average*10).toFixed()} <sup>%</sup></div>}
        </Link>
      ))}
    </div>
      
  );
};

export default Cards;
