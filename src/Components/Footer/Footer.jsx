import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className="bg-base-300 mt-24">
    <div className=" w-[80%] mx-auto flex flex-col justify-center items-center  pt-16 pb-4 text-center ">
      <h2 className=" text-3xl">Home <span className=" text-orange-400">Haven</span></h2>
      <p className=" inline-block border-b border-[#0000006b] pb-4">Explore Our website and Enjoy your best best and comfortable living.</p>
    </div>
     <footer className="footer grid justify-center grid-cols-2 lg:grid-cols-3 max-w-[1440px] w-[90%] mx-auto  p-10 text-base-content">
  <nav className="">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Single family Home</a>
    <a className="link link-hover">Luxury Apartment</a>
    <a className="link link-hover">Student Housing</a>
    <a className="link link-hover">Apartment</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Explore</h6> 
    <Link to={"/"} className="link link-hover">Home</Link>
    <Link to={"/updateprofile"} className="link link-hover">Update Profile</Link>
    <Link to={"/yourparces"} className="link link-hover">Cart</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
<div className=" flex justify-center py-2">
  <p className=" text-[16x]">All right reserved - 2024 | <a className=" text-secondary" href="https://www.facebook.com/profile.php?id=100021415790435">Mahim</a></p>
</div>
   </div>
  );
};

export default Footer;