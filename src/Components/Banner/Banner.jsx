import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlotCounter from 'react-slot-counter';

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" md:mt-16 mt-4  ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
         <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-[#eaeaea73] text-black absolute w-[60%] mx-auto rounded-xl z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div 
            data-aos="fade-right"
            data-aos-duration="1500"
             className=" py-4 space-y-2 bg-[#eaeaeacb] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Customer </h2>
              <h3 className=" font-poppins font-semibold text-xl"><SlotCounter value={500} />k</h3>
            </div>
            <div data-aos="zoom-in"
            data-aos-duration="1500"
             className=" py-4 space-y-4 bg-[#eaeaeacb] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Services</h2>
              <h3 className=" font-poppins font-semibold text-xl"> 
              <SlotCounter value={10} />
             k</h3>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-duration="1500"
             className=" py-4 space-y-4 bg-[#eaeaeacb] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Happy clint</h2>
              <h3 className=" font-poppins font-semibold text-xl"><SlotCounter value={95} />%</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
         <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-[#eaeaea73] text-black absolute w-[60%] mx-auto rounded-xl z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div 
            data-aos="fade-right"
            data-aos-duration="1500"
             className=" py-4 space-y-2 bg-[#eaeaea] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Customer </h2>
              <h3 className=" font-poppins font-semibold text-xl">500k</h3>
            </div>
            <div data-aos="zoom-in"
            data-aos-duration="1500"
             className=" py-4 space-y-4 bg-[#eaeaea] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Services</h2>
              <h3 className=" font-poppins font-semibold text-xl">10k</h3>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-duration="1500"
             className=" py-4 space-y-4 bg-[#eaeaea] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Happy clint</h2>
              <h3 className=" font-poppins font-semibold text-xl">95%</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
         <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-[#eaeaea73] text-black absolute w-[60%] mx-auto rounded-xl z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div 
            data-aos="fade-right"
            data-aos-duration="1500"
             className=" py-4 space-y-2 bg-[#eaeaea] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Customer </h2>
              <h3 className=" font-poppins font-semibold text-xl">500k</h3>
            </div>
            <div data-aos="zoom-in"
            data-aos-duration="1500"
             className=" py-4 space-y-4 bg-[#eaeaea] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Services</h2>
              <h3 className=" font-poppins font-semibold text-xl">10k</h3>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-duration="1500"
             className=" py-4 space-y-4 bg-[#eaeaea] rounded-xl">
              <h2 className=" font-cursive text-2xl font-bold">Happy clint</h2>
              <h3 className=" font-poppins font-semibold text-xl">95%</h3>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
