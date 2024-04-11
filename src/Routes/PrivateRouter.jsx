import { Children, useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Navigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
const PrivateRouter = ({children}) => {
  const {loading,user}=useContext(AuthContext)
   if(loading){
    return <div className=" flex justify-center items-center mt-20"> <HashLoader color="#36d7b7" /></div>
   }
  if(user){
    return children;
  }else{
    return <Navigate to="/login" replace={true} />
  }
  
};

export default PrivateRouter;