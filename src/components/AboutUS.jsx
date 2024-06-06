import TopNav from "./templates/TopNav"
import { useNavigate } from "react-router-dom";


const AboutUS = () => {
  const navigate=useNavigate();
  return (
    <div className=" w-full text-zinc-400 p-[6%] overflow-auto">
     <i
            className="hover:text-[#6556cd] ri-arrow-left-line  text-4xl"
            onClick={() => navigate(-1) }
          ></i>
      <div className=" mt-7">
        <h1 className="text-5xl font-semibold mb-7">We hope you enjoy your time exploring the wonderful world of movies on Movie Mania!</h1>
        
    

        <h2 className="text-3xl font-medium mt-[5%]">Welcome to Movie Mania!</h2>

        <p className="text-xl  font-normal mt-[3%]">At Movie Mania, we bring the magic of movies to your fingertips. Whether you're a casual viewer or a film aficionado, our React app, meticulously crafted by Shivam Sharma, is designed to provide you with the ultimate movie discovery experience. Dive into a vast database of films, explore detailed information, and stay updated with the latest releases and timeless classics.</p>

        <h2 className="text-3xl font-medium mt-[5%]">Our Mission</h2>
        <p className="text-xl  font-normal mt-[3%]">At Movie Mania, our mission is to connect movie lovers with the films they love. Whether you're looking for the latest blockbuster, a timeless classic, or an indie gem, Movie Mania has got you covered. We strive to offer a user-friendly experience that makes movie discovery enjoyable and effortless.</p>

        <h2 className="text-3xl font-medium mt-[5%]">Infinite Scrolling for Effortless Exploration</h2>
        <p className="text-xl  font-normal mt-[3%]">Gone are the days of endless clicking! Movie Mania utilizes infinite scrolling, allowing you to effortlessly browse through a vast collection of movies without ever needing to leave the page. Simply keep scrolling down, and new movies will automatically load, ensuring you never run out of options to explore.</p>

        <h2 className="text-3xl font-medium mt-[5%]">Infinite Scrolling for Effortless Exploration</h2>

        <p className="text-xl  font-normal mt-[3%]">Whether you're in the mood for a heart-pounding thriller, a side-splitting comedy, or a thought-provoking drama, Movie Mania's category-wise search has you covered. Refine your search by genre, director, release year, or any other criteria you desire to find exactly the type of movie you're craving.</p>

      
        <p className="text-xl  font-normal mt-[3%]">All content and functionalities within Movie Mania are protected by copyright. <br /><br /><br /><span className="mt-3 ml-[25%] font-medium">© 2024 Shivam Sharma. All rights reserved.</span></p>

      
        
      </div>
    </div>
  )
}

export default AboutUS
