import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  const navigate = useNavigate();

  const [tv, setTv] = useState([]);
  const [category, setCategory] = useState("airing_today");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = `Movie Mania | Tv Shows`;

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      console.log(data.results);
      if (data.results.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };

  useEffect(() => {
    getTv();
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="  w-screen h-screen ">
      <div className=" px-[5%] items-center justify-between flex  w-full ">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Tv Shows
        </h1>
        <div className="w-[70%] flex items-center">
          <TopNav />
          <Dropdown
            title="Catgeory"
            options={["on_the_air", "top_rated", "popular", "airing_today"]}
            func={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
