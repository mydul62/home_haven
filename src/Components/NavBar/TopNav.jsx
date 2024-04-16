import Marquee from "react-fast-marquee";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Marquee gradient={false}>
          <p className="text-sm">Best Eid Offer! Get 20% Discount on All Items. Eid Mubarak!</p>
        </Marquee>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoCallOutline />
            <span>01302104188</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <span>MydulNiter62@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
