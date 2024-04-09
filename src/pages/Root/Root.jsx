import {Outlet} from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import TopNav from "../../Components/NavBar/TopNav";
const Root = () => {
  return (
    <div>
     <div className=" ">
      <TopNav></TopNav>
     <Navbar/>
     </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;