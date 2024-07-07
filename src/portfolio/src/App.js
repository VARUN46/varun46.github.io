import './App.css';
import Intro from './layouts/Intro';
import Dsa from './layouts/Dsa';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {

  const [navigationState, setNavigationState] = useState(1);
  const [showNav, setShowNav] = useState(false);

  const navigateTo = (stateVal) => {
    setNavigationState(stateVal);
  }

  return (
    <div className="App">
      <div className="container-fluid text-center">
  <div className="row">
    <div className="navigation-header">
    <GiHamburgerMenu onClick={ () => { setShowNav(true); }} className='nav-show-action' />

    </div>
    { showNav && <div className="navigation">
    <IoMdClose onClick={ () => { setShowNav(false); }} />

      <button onClick={ () => navigateTo(1)} className="navigation-link">Introduction</button>
      <button onClick={ () => navigateTo(2)} className="navigation-link">DSA Articles</button>
    </div> }
    <div className="col-12">
    <div className="content-wrapper">
    { navigationState === 1 && <Intro></Intro> }
    { navigationState === 2 && <Dsa></Dsa> }
    </div>
    </div>
  </div>
</div>
      
    </div>
  );
}

export default App;
