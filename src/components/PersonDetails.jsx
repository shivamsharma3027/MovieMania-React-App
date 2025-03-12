import React from "react";
import { asyncLoadperson, removePerson } from "../store/actions/personActions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Dropdown from "../components/templates/Dropdown";
import HorizontalCards from "./templates/HorizontalCards";

const PersonDetails = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState("movie");
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);
  

  return info ? (
    <div className="px-[10%] w-screen h-[210vh] flex flex-col bg-[#1F1E24]">
      <nav className="h-[10vh] w-full text-zinc-200 flex items-center gap-10 text-2xl">
        <Link
          className="hover:text-[#6556cd] ri-arrow-left-line  "
          onClick={() => navigate(-1)}
        ></Link>
      </nav>
      <div className="w-full flex ">
        <div className="w-[20%]">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded object-cover h-[40vh] "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-400" />
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i className="ri-external-link-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i className="ri-facebook-circle-line"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>

          <h1 className="text-2xl text-zinc-400  font-semibold my-5">
            Personal Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold   ">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold  mt-3 ">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3  ">
            Birthday
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3  ">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3  ">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400  font-black my-5">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>

          <p className="text-zinc-400 mt-3">{info.detail.biography}</p>

          <h1 className=" mt-5 text-lg text-zinc-400 font-semibold">Summary</h1>

          <HorizontalCards data={info.combinedCredits.data.cast} />

          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">Acting</h1>

            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)]  border-2 border-zinc-700 p-5">
            {info[category + "Credits"]?.data?.cast?.map((c, i) => (
              <li
                key={i}
                className="hover:text-white p-5 rounded duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>

                  <span className="block ml-6 mt-2">
                    {c.character &&
                      ` 
   Character Name: ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
