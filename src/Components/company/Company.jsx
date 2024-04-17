const Company = () => {
  return (
    <div className=" max-w-[980px] w-[90%] mx-auto flex flex-col md:flex-row items-center  justify-between gap-8 my-16 md:my-20">
      <div data-aos="fade-right"
    data-aos-duration="2000" className=" w-[60%] md:w-[15%] flex justify-center items-center ">
        <img className=" w-full" src="
          https://i.ibb.co/Btv0XH6/tower.png" alt="" />
      </div>

      <div data-aos="fade-right"
    data-aos-duration="2200" className=" w-[60%] md:w-[15%]  flex justify-center items-center ">
        <img className=" w-full"
          src="https://i.ibb.co/ZMz7p77/equinix.png"
          alt=""
        />
      </div>
      <div data-aos="fade-left"
    data-aos-duration="2500" className=" w-[60%] md:w-[15%] flex justify-center items-center ">
        <img className=" w-[80%]"
          src="https://i.ibb.co/tJZDKt6/prologis.png" alt=""
        />
      </div >
      <div data-aos="fade-left"
    data-aos-duration="2800" className=" w-[60%] md:w-[15%] flex justify-center items-center ">
        <img className=" w-full"
          src="https://i.ibb.co/LdR3hNC/realty.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Company;
