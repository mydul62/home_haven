import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase-config";

export const AuthContext = createContext();
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // email-password verification
  const signUpPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateprofile = (name, phone, PhotoURL) => {
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("PhotoURL:", PhotoURL);
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
      photoURL: PhotoURL,
    });
  };
  

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const LogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const authInfo = {
    user,
    signUpPass,
    signInPass,
    setUser,
    LogOut,
    loading,
    googleSignIn,
    updateprofile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
