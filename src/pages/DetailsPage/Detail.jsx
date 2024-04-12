import React from 'react';

const Detail = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="col-span-2 p-6 bg-[#eaeaea]">
          <img className=' w-full' src={data && data.image} alt="" />
        </div>
        <div className="col-span-1 bg-[#eaeaea] rounded-xl p-6">
        <h3 className=' text-center text-3xl font-poppins font-semibold pb-8'>Discription</h3>
          <div className=' space-y-6'>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>Title</h2>
            <h2>{data.estate_title}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>Area</h2>
            <h2>{data.area}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>Type</h2>
            <h2>{data.type}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>Location</h2>
            <h2>{data.location}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>Facilities</h2>
            <h2 className=''>
              <ul>
              {
            data.facilities.map((facilitie,index)=>(
             <li className=' list-disc' key={index}>{facilitie}</li>
            ))}
              </ul>
            </h2>
            </div>
            <div className=' flex justify-between border-b'>
            <h2>Price</h2>
            <h2>{data.price}</h2>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
