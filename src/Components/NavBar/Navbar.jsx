import { Link } from "react-router-dom";

const Navbar = () => {
  const navlist = (
    <>
      <li className=" text-2xl font-poppins font-semibold text-[#747474]">
        <Link to={"/"}>Home</Link>
      </li>
      <li className=" text-2xl font-poppins font-semibold text-[#747474]">
        <Link to={"/updateprofile"}>Update Profile</Link>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="max-w-[1440px] w-[90%] mx-auto navbar py-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navlist}
            </ul>
          </div>
          <a className=" flex flex-row gap-0 text-5xl font-poppins">
            Home <span className="text-[#27ae60]">Haven</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navlist}
          </ul>
        </div>
        <div className="md: ml-6">
          <a className="btn text-2xl font-poppins font-semibold text-[#747474]">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
