import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignUp = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignUp = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const userConfig = {
        user,
        loader,
        createUser,
        logInUser,
        logOut,
        googleSignUp,
        googleSignIn,
        githubSignUp,
        githubSignIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={userConfig}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;