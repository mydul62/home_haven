import {Outlet} from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import TopNav from "../../Components/NavBar/TopNav";
import Footer from "../../Components/Footer/Footer";
const Root = () => {
  return (
    <div>
     <div className=" ">
      <TopNav></TopNav>
     <Navbar/>
     </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;