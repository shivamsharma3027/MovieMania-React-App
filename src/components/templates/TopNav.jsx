
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../utils/Axios";
import noImage from "../../../public/no_image.jpg"

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(null);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      
      setSearches(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center  ">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent "
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => {
            setQuery("");
          }}
          className="text-zinc-400 text-3xl ri-close-fill cursor-pointer"
        ></i>
      )}
      <div className="z-[100] absolute top-[100%] w-[50%] max-h-[50vh] bg-zinc-200 overflow-auto rounded left-[5%] ">
        {searches &&
          searches.map((s, i) => (
            <Link to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 "
            >
              <img
                className="h-[10vh] w-[10vh] object-cover rounded mr-5 shadow-lg"
                src={s.backdrop_path|| s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`:noImage}
                alt="img"
              />
              <span>
                {s.name ||
                  s.title ||
                  s.original_name ||
                  s.original_title ||
                  s.profile_path}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopNav;
