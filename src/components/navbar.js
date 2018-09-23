import React, { Component } from 'react';


//Stateless functional component
const Navbar = ({totalCounter}) => {

        return ( 
            <nav className="navbar navbar-light bg-light " >
           <a className="navbar-brand" href="#">
           Counters 
           <span className="badge badge-pill badge-secondary m-4">
           {totalCounter}
           </span>
           </a>
           </nav>
         );
        
};

 
export default Navbar;