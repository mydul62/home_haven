import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import OurServices from "../../Components/OurServices/OurServices";
import {
  useLoaderData,
} from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
const Home = () => {
    const loadData =  useLoaderData()
  return (
   <>
   <div>
    <Banner></Banner>
   </div>
    <div className="ourservices ">
      <div className="title text-center max-w-[50%] mx-auto space-y-5 my-[100px]">
        <h2 className=" text-5xl">Our Services</h2>
        <p className=" text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nemo modi, repellendus doloremque ad suscipit ipsum asperiores culpa, cupiditate a non minima eveniet.</p>
      </div>
      <div className=" max-w-[1440px] w-[90%] mx-auto grid gap-8 gap-y-12 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        <div className=" col-span-2">
          <img src={loadData[0].image} alt="" />
        </div>
        {
          loadData.slice(0,7).map(data=>(
        <OurServices key={data.id} data={data}></OurServices>
            
          ))
        }
      </div>
    </div>
   </>
  );
};

export default Home;