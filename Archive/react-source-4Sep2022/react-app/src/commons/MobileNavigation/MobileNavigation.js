import './MobileNavigation.css';
import {
    Link
  } from "react-router-dom";
import MobileNavigationHam from "./MobileNavigationHam";
import { useState } from 'react';
import { ImCross } from 'react-icons/im';

function MobileNavigation(){
   
  const [showNav,setShowNav] = useState(false);
  const componentBody = <ul id="mobile-navigation-list" className="nav flex-column">
    <div onClick={()=>setShowNav(false)} id="close-mobile-navigation"><ImCross/></div>
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
      <span onClick={()=>setShowNav(true)}>
      {!showNav && <MobileNavigationHam/>}
      </span>
      {showNav && componentBody}
      </>
    );
}

export default MobileNavigation;