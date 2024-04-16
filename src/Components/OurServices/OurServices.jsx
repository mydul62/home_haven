import { Link } from "react-router-dom";

const OurServices = ({data}) => {
  const {estate_title,description,image,view_property_button,id,status}=data
  return (
    <div   data-aos="fade-up"
    data-aos-duration="1500"  className="card relative ">
  <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
  <div className=" space-y-6">
    <h2 className=" text-3xl mt-6 text-[#222222] font-poppins font-semibold">
      {estate_title}
    </h2>
    <p className=" text-xl">{description.slice(0,80)}</p>
  </div>
  <div className=" flex justify-end pt-6 " >
    <Link to={`/details/${id}`}><button className="btn text-white bg-[#27ae60]">View Properties</button></Link>
  </div>
  <div className=" absolute top-0 right-0 bg-orange-400 h-10 w-16 flex justify-center items-center text-xl text-white rounded-l-full">
    <h3>{status}</h3>
  </div>
</div>

  );
};

export default OurServices;