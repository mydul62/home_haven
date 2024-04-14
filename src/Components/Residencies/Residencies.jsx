import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residential.css";
import { sliderSettings } from "./Utils/common";
import { Link } from "react-router-dom";
const Residencies = ({ loadData }) => {
  return (
    <div className="">
      <div>
        <Swiper {...sliderSettings} className="">
          {loadData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/details/${data.id}`}>
              <div className="p-4 hover:bg-slate-100 rounded-xl duration-500">
                <div className=" rounded-xl">
                  <figure className="h-[300px] w-full rounded-xl">
                    <img
                      className="rounded-xl   hover:scale-105 hover:duration-500  h-[300px] w-full"
                      src={data.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className=" text-left space-y-3 my-4">
                    <h2 className=" font-poppins font-bold">{data.price}</h2>
                    <h2 className=" text-2xl font-bold text-[#130f40]">{data.estate_title}</h2>
                    <p>{data.description.slice(0,60)}</p>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
