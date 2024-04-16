import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residential.css";
import { sliderSettings } from "./Utils/common";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Residencies = ({ loadData }) => {
  const [swiper, setSwiper] = useState(null);

  const slideToPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const slideToNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="1500" className="relative max-w-[1440px] mx-auto w-[90%]">
      <div className=" ">
        <Swiper {...sliderSettings} className="" onSwiper={setSwiper}>
          {loadData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/details/${data.id}`}>
                <div className="p-4 hover:bg-slate-100 rounded-xl duration-500">
                  <div className="rounded-xl">
                    <figure className="h-[300px] w-full rounded-xl">
                      <img
                        className="rounded-xl hover:scale-105 hover:duration-500 h-[300px] w-full"
                        src={data.image}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="text-left space-y-3 my-4">
                      <h2 className="font-poppins font-bold">{data.price}</h2>
                      <h2 className="text-2xl font-bold text-[#130f40]">
                        {data.estate_title}
                      </h2>
                      <p>{data.description.slice(0, 60)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute  mb-16 md:my-0 md:-top-20 bottom-0 right-0 z-10 flex  gap-4">
          <button className="btn bg-[#27ae60]" onClick={slideToPrev}>
            <GrPrevious size={20} />
          </button>
          <button className=" bg-[#27ae60] btn" onClick={slideToNext}>
            <GrNext size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Residencies;
