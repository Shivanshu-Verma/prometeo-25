import React from 'react'
import "./NotFound.css"
import Stars from '../components/stars';
import notfound from '../assets/not-found.png'
import logo from "../assets/coming-soon/logo-new.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notfound-body">
        <div className="stars">
          <Stars number={500}/>
        </div>
        <div className="notfound-main-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="notfound-title">
            <img src={notfound} alt="Not Found" />{" "}
          </div>
          <div className="notfound-content">
            <span>This page didn’t get the invite to <b>Prometeo</b>. But don't worry—<b>you did!</b> Let's get you back on <Link to="/"><b><i>Home Page</i></b></Link>.</span>
          </div>
        </div>
      </div>
    </>
    
    
  );
}

export default NotFound;
