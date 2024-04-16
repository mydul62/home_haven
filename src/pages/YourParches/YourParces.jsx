import { getBuyInfo } from "../../Components/Residencies/Utils/LocalStorage/LocalBuyProduct";
import { getRentInfo } from "../../Components/Residencies/Utils/LocalStorage/LocalRentProduct";

const YourParces = () => {
  const buyData = getBuyInfo();
  const rentData = getRentInfo();
  return (
    <div className=" grid grid-cols-1  md:grid-cols-6 gap-8 max-w-7xl w-[95%] mx-auto mt-44">
      <div className=" space-y-4 col-span-4 flex justify-center flex-col gap-6">
        <div>
          <h3 className=" text-2xl font-semibold my-4">Your Buy Item</h3>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {buyData.map(data => (
                <div
                  key={data.id}
                  className="card p-2 hover:scale-105 duration-500 shadow-xl"
                >
                  <figure>
                    <img
                      className=" rounded-xl h-[120px] w-full"
                      src={data.image}
                      alt="grad flat"
                    />
                  </figure>
                  <div className=" space-y-2 my-2">
                    <h2 className="text-[16px] font-poppins font-bold">
                     {data.estate_title}
                    </h2>
                    <h2 className=" font-semibold">Status:{data.status}</h2>
                    <h3>{data.price}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <hr />

          <div>
          <h3 className=" text-2xl font-semibold my-4">Your Rent Item</h3>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rentData.map(data => (
                <div
                  key={data.id}
                  className="card p-2 hover:scale-105 duration-500 shadow-xl"
                >
                  <figure>
                    <img
                      className=" rounded-xl  h-[120px] w-full"
                      src={data.image}
                      alt="grad flat"
                    />
                  </figure>
                  <div className=" space-y-2 my-2">
                    <h2 className="text-[16px] font-poppins font-bold">
                     {data.estate_title}
                    </h2>
                    <h2 className=" font-semibold">Status:{data.status}</h2>
                    <h3>{data.price}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
        </div>
      </div>
      <div className=" col-span-full md:col-span-2">
        <div className=" my-6 space-y-6">
          <div className="flex justify-between border-b border-black pb-4">
            <h2>Title</h2>
            <h2>Price</h2>
          </div>
          <div className="flex justify-between border-b border-black pb-4">
            <h2>amar sonar bangla</h2>
            <h2>1584</h2>
          </div>
          <div className="flex justify-between ">
            <h2>Total</h2>
            <h2>1584</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourParces;
