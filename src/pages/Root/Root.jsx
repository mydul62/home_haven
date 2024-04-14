import {Outlet} from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import TopNav from "../../Components/NavBar/TopNav";
import Footer from "../../Components/Footer/Footer";
import Navmenu from "../../Components/Navmenu";
const Root = () => {
  return (
    <div>
     <div className=" fixed top-0 w-full z-50 ">
       <Navmenu></Navmenu>
     </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;