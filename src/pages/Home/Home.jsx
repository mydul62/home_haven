import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
   <>
    <div>
     <Banner></Banner>
    </div>
    <div className="ourservices">
      <div className="title text-center max-w-[60%] mx-auto my-[100px]">
        <h2 className=" text-4xl">Our Services</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nemo modi, repellendus doloremque ad suscipit ipsum asperiores culpa, cupiditate a non minima eveniet, illo minus quis. Atque, facilis. Explicabo, aliquam.</p>
      </div>
    </div>
   </>
  );
};

export default Home;