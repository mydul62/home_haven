import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import OurServices from "../../Components/OurServices/OurServices";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { TbArrowUp } from "react-icons/tb";
import { TbArrowDown } from "react-icons/tb";
import Residencies from "../../Components/Residencies/Residencies";
import ResidentialTitle from "../../Components/Residencies/ResidentialTitle";


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
      </div >

        <div className="max-w-[1440px] mx-auto">
          <ResidentialTitle></ResidentialTitle>
        <Residencies loadData={loadData}></Residencies>
        </div>
      <div className="ourservices">
        <div className="title text-center w-[80%] md:max-w-[40%] mx-auto space-y-5 ">
          <h2 className=" text-5xl">Our All Services</h2>
          <p className=" text-xl ">
          Explore our estate listings for modern flats. Find your perfect home with ease. Start your journey today!
          </p>
        </div>
        <div
  className="max-w-[1440px] w-[90%] mx-auto grid gap-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16"
>
  <div   data-aos="fade-right"
  data-aos-duration="1500" className="col-span-full md:col-span-2 rounded-xl">
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
      <div className=" ">
      </div>
    </>
  );

  
};

export default Home;
