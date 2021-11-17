import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
      <div>
      <nav>
     <NavLink
     style={({ isActive }) => {
        return {
          
          margin: "1rem",
          color: isActive ? "red" : "",
          fontWeight: isActive ? "bold" : "",
        };
      }}
       to = "/home">Home</NavLink>
     <NavLink
     style={({ isActive }) => {
        return {
          
          margin: "1rem ",
          color: isActive ? "red" : "",
          fontWeight: isActive ? "bold" : "",
        };
      }}
     
       to = "/about">About</NavLink>
     <NavLink
     style={({ isActive }) => {
        return {
          
          margin: "1rem ",
          color: isActive ? "red" : "green",
          fontWeight: isActive ? "bold" : "",
        };
      }}
    
       to = "/friends">Friends</NavLink>
        </nav>
      </div>
    );
};

export default Header;