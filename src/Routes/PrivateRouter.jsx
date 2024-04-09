import { Children, useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
  const {user}=useContext(AuthContext)

  if(user){
    return children;
  }else{
    return <Navigate to="/login" replace={true} />
  }
  
};

export default PrivateRouter;