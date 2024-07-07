import './App.css';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet } from 'react-router-dom';

function App() {

  const [showNav, setShowNav] = useState(false);


/*  return (
    <div className="App">
  <div className="container-content">
    <div className="navigation-header">
    <GiHamburgerMenu onClick={ () => { setShowNav(true); }} className='nav-show-action' />

    </div>
    <div className={`navigation ${showNav ? 'navigation-visible' : ''}` }>
    <IoMdClose onClick={ () => { setShowNav(false); }} />

      <button onClick={ () => navigateTo(1)} className="navigation-link">Introduction</button>
      <button onClick={ () => navigateTo(2)} className="navigation-link">DSA Articles</button>
    </div>
    <div className="content-wrapper">
    { navigationState === 1 && <Intro></Intro> }
    { navigationState === 2 && <Dsa></Dsa> }
    </div>
</div>
      
    </div>
  );*/


  return (
    <div className="App">
  <div className="container-content">
    <div className="navigation-header">
    <GiHamburgerMenu onClick={ () => { setShowNav(true); }} className='nav-show-action' />

    </div>
    <div className={`navigation ${showNav ? 'navigation-visible' : ''}` }>
    <IoMdClose onClick={ () => { setShowNav(false); }} />

      <Link to = {`about`} className="navigation-link">Introduction</Link>
      <Link to = {`blog`} className="navigation-link">DSA Articles</Link>
    </div>
    <div className="content-wrapper">
      <Outlet/>
    </div>
</div>
      
    </div>
  );
}

export default App;
