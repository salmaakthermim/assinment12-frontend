import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firbase/firbase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const  [userProfile, setUserProfile] = useState({});
    const [user, setUser] = useState(null);
    console.log("user tt", user)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updatUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        });
        
    }
    const singOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured hhg', currentUser)
            setLoading(false)
        })
        return() => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        if (user?.email) {
          axios.get(`http://localhost:5000/user-profile?email=${user?.email}`).then((res) => {
            setUserProfile(res.data); 
          });
        }
      }, [user]);


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        singIn,
        logOut,
        updatUserProfile,
        singOutUser,
        userProfile
       


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
    
};
export const useAuth = () => {
    return useContext(AuthContext);
    
  };
  

export default AuthProvider;