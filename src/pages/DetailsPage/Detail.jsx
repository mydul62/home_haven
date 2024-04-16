import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { saveBuyInfo } from '../../Components/Residencies/Utils/LocalStorage/LocalBuyProduct';
import { saveRentInfo } from '../../Components/Residencies/Utils/LocalStorage/LocalRentProduct';

const Detail = ({ data }) => {
  const { comments } = data;
  const handleBuy =(data)=>{
    saveBuyInfo(data)
  }
  const handleRent =(data)=>{
    saveRentInfo(data)
  }
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-full  md:col-span-2">
          <div  className='relative p-6 bg-[#eaeaea]'>
            <img className='w-full' src={data && data.image} alt="" />
            <div className=" absolute top-10 right-10 bg-orange-400 h-16 w-24 flex justify-center items-center text-xl text-white rounded-l-full">
    <h3>{data.status}</h3>
  </div>
          </div>
          <div className='pt-6'>
            <Tabs>
              <TabList>
                <Tab>Customer Review</Tab>
                <Tab>Description</Tab>
              </TabList>

              <TabPanel>
                <div className=' flex flex-col gap-6'>
                {comments.map((comment, index) => (
                  <div key={index}>
                    <h2 className='font-poppins font-bold text-xl'>{comment.user}</h2>
                    <div className='flex'>
                      <h2 className='font-bold font-poppins'>Comment:</h2>
                      <p className='font-poppins text-sm'>{comment.comment}</p>
                    </div>
                  </div>
                ))}
                </div>
              </TabPanel>
              <TabPanel>
                <h2>{data.description}</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="col-span-full md:col-span-1    ">

         <div className=' bg-[#eaeaea] p-6 rounded-xl'>
         <h3 className='text-center text-3xl font-poppins font-semibold pb-8'>Description</h3>
          <div className='space-y-6'>
            <div className='flex justify-between border-b border-black pb-4'>
              <h2>Title</h2>
              <h2>{data.estate_title}</h2>
            </div>
            <div className='flex justify-between border-b border-black pb-4'>
              <h2>Area</h2>
              <h2>{data.area}</h2>
            </div>
            <div className='flex justify-between border-b border-black pb-4'>
              <h2>Type</h2>
              <h2>{data.type}</h2>
            </div>
            <div className='flex justify-between border-b border-black pb-4'>
              <h2>Location</h2>
              <h2>{data.location}</h2>
            </div>
            <div className='flex justify-between border-b border-black pb-4'>
              <h2>Facilities</h2>
              <h2 className=''>
                <ul>
                  {data.facilities.map((facility, index) => (
                    <li className='list-disc' key={index}>{facility}</li>
                  ))}
                </ul>
              </h2>
            </div>
            <div className='flex justify-between border-b'>
              <h2>Price</h2>
              <h2>{data.price}</h2>
            </div>
            <div className=' flex justify-end'>
              {
                data.status=="rent"?<button onClick={()=>handleRent(data)}  className=' btn bg-orange-400 text-white'>Rent Now</button>:
                <button onClick={()=>handleBuy(data)}  className=' btn bg-orange-400 text-white'>Sale Now</button>
              }
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
