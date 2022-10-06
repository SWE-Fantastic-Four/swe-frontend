import { initializeApp } from "firebase/app"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import P from './constants/paths'
import CreateRoute from './views/createroute/CreateRoute'
import Dashboard from './views/dashboard/Dashboard'
import Login from './views/login/Login'
import Profile from './views/profile/Profile'
import { login, logout, updateProfilePhoto, updateDisplayName } from "./store/auth";
import { getAuth } from "firebase/auth";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  initializeApp({
    "apiKey": "AIzaSyDQo2Q0zwwsmdKmYuxMkC-xrkZfDuO_3hM",
    "authDomain": "swe-backend-20cf0.firebaseapp.com",
    "projectId": "swe-backend-20cf0",
    "storageBucket": "swe-backend-20cf0.appspot.com",
    "messagingSenderId": "814253670096",
    "appId": "1:814253670096:web:81f8f9fabf6e6114bbe8d5",
    "measurementId": "G-PFRT0M5S3H"
  });
  
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const displayName = user.displayName;
        const profileSrc = user.photoURL;
        dispatch(login());
        dispatch(updateDisplayName(displayName));
        dispatch(updateProfilePhoto(profileSrc));
      } else {
        dispatch(logout());
        dispatch(updateDisplayName(""));
        dispatch(updateProfilePhoto(""));
      }
    });
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={P.DASHBOARD} element={<Dashboard />} />
        <Route path={P.LOGIN} element={isLoggedIn ? <Navigate to={P.DASHBOARD} replace/> : <Login />}/>
        <Route path={P.PROFILE} element={<Profile />}/>
        <Route path={P.CREATEROUTE} element={<CreateRoute />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
