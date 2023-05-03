import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.comfig';

export const AuthContext=createContext(null);

const AuthProviders = ({children}) => {
    const [user,setUser]=useState('')


    const auth = getAuth(app);



    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    


    const authInfo={
        user,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;