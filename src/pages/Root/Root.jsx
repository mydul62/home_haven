import {Outlet} from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
const Root = () => {
  return (
    <div>
     <div>
     <Navbar/>
     </div>
      <div>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;