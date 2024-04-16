import { Children, useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Navigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
  const {loading,user}=useContext(AuthContext)
  const location = useLocation();

   if(loading){
    return <div className=" flex justify-center items-center mt-20"> <HashLoader color="#36d7b7" /></div>
   }
  
  if(user){
    return children;
  }else{
    return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
  }
  
};

export default PrivateRouter;