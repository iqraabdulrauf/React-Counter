import React from 'react';


//Stateless functional component
const Navbar = ({totalCounterActive,ontotalCounts}) => {
 
 
        return ( 
          <nav className="navbar navbar-light bg-light " >
           <a className="navbar-brand" href="#">
           Active Counters 
           <span className="badge badge-pill badge-secondary m-4">
           {totalCounterActive}
           </span>
           Total Counts 
           <span  className="badge badge-pill badge-secondary m-3"
            >{ontotalCounts}
           </span>
           
           
          
           </a>
           </nav>
         );
        
};

 
export default Navbar;