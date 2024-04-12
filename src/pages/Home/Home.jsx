import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import OurServices from "../../Components/OurServices/OurServices";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { TbArrowUp } from "react-icons/tb";
import { TbArrowDown } from "react-icons/tb";
import Review from "../../Components/Review/Review";

// ..
AOS.init();
const Home = () => {
  const [show,setShow]=useState(true)
  const loadData = useLoaderData();

  const handleShowMore=()=>{
    setShow(!show)
  }
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="ourservices ">
        <div className="title text-center max-w-[50%] mx-auto space-y-5 my-[100px]">
          <h2 className=" text-5xl">Our Services</h2>
          <p className=" text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nemo
            modi, repellendus doloremque ad suscipit ipsum asperiores culpa,
            cupiditate a non minima eveniet.
          </p>
        </div>
        <div
  data-aos="fade-up"
  data-aos-duration="1500"
  className="max-w-[1440px] w-[90%] mx-auto grid gap-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
>
  <div className="col-span-2 rounded-xl">
    <img className="rounded-xl" src={loadData[0].image} alt="" />
  </div>
  {show
    ? loadData.slice(1, 5).map((data) => (
        <OurServices key={data.id} data={data}></OurServices>
      ))
    : loadData.slice(2).map((data) => (
        <OurServices key={data.id} data={data}></OurServices>
      ))}
</div>
<div onClick={handleShowMore} className="max-w-[1440px] flex justify-center my-24 mx-auto">
    <button className="flex justify-center gap-1 items-center py-3 bg-blue-500 px-8 text-white rounded-lg">{show?<TbArrowDown />
:<TbArrowUp />
}{show?"Show More":"show Less"}</button>
  </div>
      </div>
      <div>
        <Review></Review>
      </div>
    </>
  );

  
};

export default Home;
