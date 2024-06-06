import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
const Movie = () => {
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState([])
  const [category, setCategory] = useState("now_playing")
  
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title=`Movie Mania | Movies`

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
   
      console.log(data.results);
      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
   
    } catch (err) {
      console.log(err);
    }
  };

 

  const refreshHandler =  () => {
    if (movie.length === 0) {
      getMovies();
    } else {
       setPage(1);
      setMovie([]);
      getMovies()
    }
  };

  useEffect(() => {
    getMovies();
    refreshHandler();
  }, [category])







  return movie.length > 0 ? (
    <div className="  w-screen h-screen ">
      <div className=" px-[5%] items-center justify-between flex  w-full ">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Movies
        </h1>
        <div className="w-[70%] flex items-center">
          <TopNav />
          <Dropdown
            title="Catgeory"
            options={[
              "popular","top_rated",
              "upcoming","now_playing"
            ]}
            func={(e)=>{setCategory(e.target.value)}}
          />
        
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie
