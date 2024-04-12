import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";

const Navbar = () => {
  const {user,LogOut}= useContext(AuthContext);
  const handleSignOut=()=>{
       LogOut()
  }
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
      <div className="max-w-[1440px] w-[90%] mx-auto navbar py-4">
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
          {
            user? <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <img alt="user" src={`${user ? user.photoURL : user}`} />
              </div>
            </div>
            <ul tabIndex={0}  className="menu border-[#aeaeae] bg-[#eaeaeadd] space-y-4 my-8 menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user.email}
                </a>
              </li>
              <li><Link to={"/updateprofile"}>Update Profile</Link></li>
              <li className="ml-4 cursor-pointer" onClick={handleSignOut}>Logout</li>
            </ul>
          </div>: <Link to={"/login"} className="btn text-2xl font-poppins font-semibold text-[#747474]">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
