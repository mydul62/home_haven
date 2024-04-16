import { getBuyInfo } from "../../Components/Residencies/Utils/LocalStorage/LocalBuyProduct";
import { getRentInfo } from "../../Components/Residencies/Utils/LocalStorage/LocalRentProduct";

const YourParcels = () => {
  const buyData = getBuyInfo();
  const rentData = getRentInfo();

  return (
    <div className="container mx-auto px-4 py-8 mt-44">
      <h2 className="text-3xl font-bold mb-6">Your Parcels</h2>

      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <h3 className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-xl font-bold py-4 px-6 mb-4 rounded-t-xl">Your Buy Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {buyData.map(data => (
              <div key={data.id} className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <img className="w-full h-40 object-cover rounded-t-lg" src={data.image} alt={data.estate_title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{data.estate_title}</h3>
                  <p className="text-sm text-gray-600 mb-1">Status: {data.status}</p>
                  <p className="text-lg font-bold">{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="bg-white rounded-xl shadow-md overflow-hidden">
          <h3 className="bg-gradient-to-r from-green-400 to-blue-600 text-white text-xl font-bold py-4 px-6 mb-4 rounded-t-xl">Your Rent Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {rentData.map(data => (
              <div key={data.id} className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <img className="w-full h-40 object-cover rounded-t-lg" src={data.image} alt={data.estate_title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{data.estate_title}</h3>
                  <p className="text-sm text-gray-600 mb-1">Status: {data.status}</p>
                  <p className="text-lg font-bold">{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="bg-white rounded-xl shadow-md mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">Total</h2>
        <div className="border-b border-gray-200 pb-4">
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold">Amar Sonar Bangla</h3>
            <p className="text-lg font-bold">1584</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Total</h3>
            <p className="text-lg font-bold">1584</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default YourParcels;
