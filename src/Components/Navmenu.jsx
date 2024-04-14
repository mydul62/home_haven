import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import { AuthContext } from '../Firebase/FirebaseProvider';
import { Link, NavLink } from 'react-router-dom';
import TopNav from './NavBar/TopNav';

const Navmenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  
  const handleSignOut = () => {
    LogOut();
  };
 const avatar="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
  const navlist = (
    <>
      <li className="hover:text-gray-300 text-xl ">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:text-gray-300 text-xl">
        <NavLink to={"/updateprofile"}>Update Profile</NavLink>
      </li>
    </>
  );

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
   <>
   <div className=' fixed top-0 w-full z-40'>
   <TopNav></TopNav>
   <div className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6'>
     <nav className=" max-w-[1440px] mx-auto  ">
      <div className="flex justify-between  items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold flex gap-0">Home <span className=' text-orange-400'>Haven</span> </h1>
        </div>
        <div className=' flex items-center gap-3'>
        <div className="md:hidden">
          {!showSidebar ? (
            <AiOutlineMenu className="text-2xl cursor-pointer" onClick={toggleSidebar} />
          ) : (
            <AiOutlineClose className="text-2xl cursor-pointer" onClick={toggleSidebar} />
          )}
        </div>
        <div className=" md:flex items-center">
          <ul className=" hidden md:flex space-x-4">
            {navlist}
          </ul>
          <div className="relative ml-4">
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
          user?<img alt="user" src={user.photoURL} />:<Link to={"/login"}><img  alt="Tailwind CSS Navbar component" src={avatar} /></Link>
          }
        </div>
      </div>
     {
      user &&  <ul tabIndex={0} className="mt-3 z-30 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
      <li>
        <a className="justify-between">
          {user.displayName}
        </a>
      </li>
      <li ><Link to={"/updateprofile"}>Profile</Link></li>
      <li onClick={handleSignOut}><a>Logout</a></li>
    </ul>
     }
    </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
   </div>
   <div>
   </div>
   </div>
   <ul className={`${showSidebar?"static":"absolute top-[-100px]"} flex flex-col justify-center items-center gap-4 py-6`}>
    {navlist}
  </ul>
   </>
  );
};

export default Navmenu;
