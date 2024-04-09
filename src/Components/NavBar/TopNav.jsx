import Marquee from "react-fast-marquee";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="bg-[#2f3640] text-white py-3">
      <div className=" flex justify-between max-w-[1440px] w-[90%] mx-auto ">
      <div className=" w-40%">
        <h3> <Marquee>Best eid offer || Discout in All 20% || Eid Mobarok</Marquee> </h3>
      </div>
      <div className=" flex justify-center items-center gap-4">
        <p className=" flex items-center gap-1"><IoCallOutline />
01302104188</p>
<p className=" flex justify-center items-center gap-1"><MdOutlineEmail />
MydulNiter62@gmail.com</p>
      </div>
    </div>
    </div>
  );
};

export default TopNav;