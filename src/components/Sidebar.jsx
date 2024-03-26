import React, { useState } from 'react';
import {
    FaBars, // Hamburger icon for expanding the sidebar
   
}from "react-icons/fa";
import "../assets/images/home.svg"
import { NavLink } from 'react-router-dom';
import Topnav from './Topnav';
import Tracking from './Tracking';
import Transaction from './Transaction';

// Sidebar component with a state variable "isOpen" to control the expansion of the sidebar
const Sidebar = ({children}) => {
    //const[isOpen ,setIsOpen] = useState(false);

    // Function to toggle the sidebar expansion
    // const toggle = () => setIsOpen (!isOpen);

    // Array of menu items with path, name, and icon
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon: <img src="src\assets\images\home.svg"/>
        },
      
        {
            path:"/Tracking",
            name:"Package tracking",
            icon:<img src="src\assets\images\map.svg"/>
        },
        {
            path:"/Transaction",
            name:"My transaction",
            icon:<img src="src\assets\images\receipt-2.svg"/>
        }
        
    ]

    // Array of submenu items with path, name, and icon
    const subMenuItem=[
        {
            path:"/settings",
            name:"Setting",
            icon:<img src="src\assets\images\setting-2.svg"/>
        }, 
        {
            path:"/logout",
            name:<div style={{color: '#BD2F51'
            }}>Logout account</div>,
            icon:<img src="src\assets\images\logout.svg"/>
        },
      
    ]

    // Return the JSX for the Sidebar component
    return (
        <div className="containerSidebar">
           <div className="sidebar">
               <div className="top_section">
                   <img className="logo" src='src\assets\images\favicon.png'/>
               </div>
               <div className='menuItem'>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               </div>
               <div className='subMenuItem'>
               {
                subMenuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div  className="link_text">{item.name}</div>
                    </NavLink>
                ))
            } </div>
           </div>
           
        
           
           <main>
           <div>
           <Topnav/>
           </div>{children}</main>
           
        </div>
    );
};

// Export the Sidebar component
export default Sidebar;