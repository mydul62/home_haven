import { useEffect, useState } from "react";

const Review = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {data.slice(0, 3).map((dt) => (
          <div key={dt.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                  <img src={dt.image} className="w-full h-full object-cover" alt={dt.author} />
                </div>
                <h5 className="text-lg font-semibold">{dt.author}</h5>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h6 className="text-sm font-medium text-gray-600">{dt.date}</h6>
                <div className="flex items-center gap-1">
                  <h6 className="text-sm font-medium text-primary">{dt.rating}</h6>
                  <span role="img" aria-label="star" className="text-yellow-500">
                    ⭐
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700">{dt.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
