import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Details from "../pages/DetailsPage/Details";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import YourParces from "../pages/YourParches/YourParces";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch('/Data.json')
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"updateprofile",
        element:<PrivateRouter><UpdateProfile/></PrivateRouter> 
      },
      {
        path:"/details/:id",
        element:<PrivateRouter><Details></Details></PrivateRouter> ,
        loader:()=>fetch('/Data.json')
      },
      {
        path:"/yourparces",
        element:<PrivateRouter><YourParces></YourParces></PrivateRouter>
      }
    ]
  },
]);
const Routes = () => {
  return (
    <div>
      
    </div>
  );
};

export default Routes;