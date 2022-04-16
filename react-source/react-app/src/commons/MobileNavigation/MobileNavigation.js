import './MobileNavigation.css';
import {
    Link
  } from "react-router-dom";
import MobileNavigationHam from "./MobileNavigationHam";
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

function MobileNavigation(){
   
  const [showNav,setShowNav] = useState(false);
  const componentBody = <ul className={((showNav && 'showNav') || 'hideNav') +' nav flex-column mobile-navigation-list'}>

    <div onClick={()=>setShowNav(false)} className="close-mobile-navigation"><ImCross/></div>
  <li className="nav-item">
    <Link className="nav-link" to="/">About</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/portfolio">Portfolio</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/contact">Contact</Link>
  </li>
</ul>
 ;
   return (
      <>
      {!showNav && <span onClick={()=>setShowNav(true)}>
    <MobileNavigationHam/></span>}
    {componentBody}
      </>
    );
}

export default MobileNavigation;