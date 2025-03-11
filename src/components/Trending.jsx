import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
document.title=`Movie Mania | Trending`+ " "+category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();


  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      //  setTrending(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  

  const refreshHandler =  () => {
    if (trending.length === 0) {
      getTrending();
    } else {
       setPage(1);
      setTrending([]);
      getTrending()
    }
  };

  useEffect(() => {
    getTrending();
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="  w-screen h-screen ">
      <div className=" px-[5%] items-center justify-between flex  w-full ">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Trending
        </h1>
        <div className="w-[70%] flex items-center">
          <TopNav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => {
              setCategory(e.target.value);
            }}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => {
              setDuration(e.target.value);
            }}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
