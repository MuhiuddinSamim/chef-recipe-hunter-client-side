import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.comfig';

export const AuthContext=createContext(null);
 const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user,setUser]=useState('')
     const [loading,setLoading]=useState(true);
   


    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle=()=>{
      return  signInWithPopup(auth,googleProvider);
    }
    const signInGit=()=>{
        return signInWithPopup(auth,gitProvider);
    }
     const logOut =()=>{
        return signOut(auth)
    }
    
     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        logIn,
        signInGoogle,
        signInGit,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;