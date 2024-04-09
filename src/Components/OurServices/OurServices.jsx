import { Link } from "react-router-dom";

const OurServices = ({data}) => {
  const {estate_title,description,image,view_property_button,id}=data
  return (
    <div className="card ">
  <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
  <div className=" space-y-6">
    <h2 className=" text-3xl mt-6 text-[#222222] font-poppins font-semibold">
      {estate_title}
    </h2>
    <p className=" text-xl">{description}</p>
  </div>
  <div className=" flex justify-end">
    <Link to={`/details/${id}`}><button className="btn">{view_property_button}</button></Link>
  </div>
</div>
  );
};

export default OurServices;