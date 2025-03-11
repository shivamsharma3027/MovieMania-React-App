import React, { useEffect } from "react";
import { useParams, Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { asyncLoadtv, removetv } from "../store/actions/tvActions";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards.jsx";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id, dispatch]);

  if (!info || !info.detail) return <Loading />;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
      className="relative w-screen h-[220vh] px-[10%]"
    >
      {/* Part 1: Navigation */}
      <nav className="h-[10vh] w-full text-zinc-200 flex items-center gap-10 text-2xl">
        <Link
          className="hover:text-[#6556cd] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}>
          <i className="">IMDB</i>
        </a>
      </nav>

      {/* Part 2: Poster and Details */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded object-cover h-[70vh]"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black">
            {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            <small className="ml-1 text-2xl font-bold text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex mt-4 mb-5 text-zinc-100 items-center gap-x-5">
            <span className="text-white text-xl font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center rounded-full">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="font-semibold text-2xl w-[60px] leading-6">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>

          <h1 className="text-2xl mt-5 mb-3 text-zinc-200">Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-2xl mt-5 mb-3 text-zinc-200">TV Translated</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link className="py-5 px-5 bg-[#6556CD] rounded-lg" to={`${pathname}/trailer`}>
            <i className="mr-2 text-xl ri-play-circle-fill"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Part 3: Available Platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchProvider?.flatrate && (
          <div className="flex gap-x-8 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchProvider.flatrate.map((w) => (
              <img
                key={w.provider_id}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProvider?.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchProvider.rent.map((w) => (
              <img
                key={w.provider_id}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProvider?.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchProvider.buy.map((w) => (
              <img
                key={w.provider_id}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

{/* Part 4: Seasons  */}
<hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-400" />
      <h1 className="text-3xl font-bold text-white">Seasons</h1>
      
<div className="w-[100%] flex overflow-y-hidden mb-5 p-5 gap-5">

{info.detail.seasons
  .filter((s) => s.poster_path || s.backdrop_path || s.profile_path) // ✅ Filter only those with images
  .map((s) => (
    
    <img
      key={s.id} // ✅ Unique key for better performance
      title={`${s.name}`}
      className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded object-cover w-[20vw] h-[30vh]"
      src={`https://image.tmdb.org/t/p/original/${
        s.poster_path || s.backdrop_path || s.profile_path
        }`}
        alt={`Season ${s.season_number}`}
        
        />

    
))}

</div>






      {/* Part 5: Similar Recommendations */}
      <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-400" />
      <h1 className="text-3xl font-bold text-white">Recommended</h1>
      <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

      <Outlet />
    </div>
  );
};

export default TvDetails;
