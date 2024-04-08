import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
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
        element:<UpdateProfile/>
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