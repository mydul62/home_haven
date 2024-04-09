import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase-config";

export const AuthContext = createContext();
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState("");

  // email-password verification
  const signUpPass = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)    
  };
  const signInPass = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)    
  };

  useEffect(()=>{
     onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
  },[])

  const LogOut=()=>{
    signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      console.log(error.message);
    });
  }

  const authInfo = {
    user,
    signUpPass,
    signInPass,
    setUser,
    LogOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
