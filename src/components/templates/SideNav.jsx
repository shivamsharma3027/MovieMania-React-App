

import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-500 p-3">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6353c6] ri-tv-fill mr-3 "></i>
        <span>Movie Mania</span>
      </h1>
      <nav className="flex flex-col  text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-team-fill"></i> People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col  text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link to="/about_us" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-information-fill"></i> About
        </Link>
        <Link to="/contact" className="hover:bg-[#6353c6] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
