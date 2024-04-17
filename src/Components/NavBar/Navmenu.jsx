import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../Firebase/FirebaseProvider';
import { Link, NavLink } from 'react-router-dom';
import TopNav from './TopNav';
import './Navbar.css'

const Navmenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  
  const handleSignOut = () => {
    LogOut();
  };
 const avatar="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";
  const navlist = (
    <>
      <li className="hover:text-orange-500 text-xl ">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:text-orange-500  text-xl">
        <NavLink to={"/yourparces"}>Cart</NavLink>
      </li>
      <li className="hover:text-orange-500  text-xl">
        <NavLink to={"/updateprofile"}>Update Profile</NavLink>
      </li>
    </>
  );

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
   <>
   <div className='fixed top-0 w-full z-40'>
   <TopNav></TopNav>
   <div className='bg-gradient-to-r from-[#8c7ae6ac]  to-[#0096e6a4] py-2 text-white  px-6'>
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
          <ul className="menu hidden  md:flex items-center  md:flex-row space-x-4">
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
   <div className={`absolute ${showSidebar ? 'top-[65px]' : '-top-80'} ease-in duration-300 z-40 w-full text-center items-center md:hidden flex justify-center bg-[#c8d6e5] opacity-95 font-bold`}>
  <ul className='flex flex-col justify-center items-center text-center py-6 gap-6'>
    {navlist}
  </ul>
</div>

   <div>
   </div>
  
   </div>
  
   </>
  );
};

export default Navmenu;