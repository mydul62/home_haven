import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navmenu from "../../Components/Navmenu";
const Root = () => {
  return (
    <div>
     <div className=" ">
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