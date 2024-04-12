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
            <h2>area</h2>
            <h2>{data.area}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>type</h2>
            <h2>{data.type}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>location</h2>
            <h2>{data.location}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>facilities</h2>
            <h2 className='flex flex-col gap-2'>{
            data.facilities.map((facilitie,index)=>(
             <h3 key={index}>{facilitie}</h3>
            ))}</h2>
            </div>
            <div className=' flex justify-between border-b border-black pb-4'>
            <h2>price</h2>
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
