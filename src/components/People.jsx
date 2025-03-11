import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {

  const navigate = useNavigate();

  const [person, setPerson] = useState([]);
  const [category, setCategory] = useState("popular");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = `Movie Mania | Peoples`;

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      
      if (data.results.length > 0) {
        setPerson((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    getPerson();
    refreshHandler();
  }, [category]);



  return person.length > 0 ? (
    <div className="  w-screen h-screen ">
      <div className=" px-[5%] items-center justify-between flex  w-full ">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Peoples
        </h1>
        <div className="w-[70%] flex items-center">
          <TopNav />
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People

