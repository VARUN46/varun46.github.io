import './App.css';
import Intro from './layouts/Intro';
import Dsa from './layouts/Dsa';
import { useState } from 'react';


function App() {

  const [navigationState, setNavigationState] = useState(1);

  const navigateTo = (stateVal)=>{
    setNavigationState(stateVal);
  }

  return (
    <div className="App">
      <div className="container-fluid text-center">
  <div className="row">
    <div className="col-2 navigation">
      <button onClick={()=>navigateTo(1)} className="navigation-link">Introduction</button>
      <button onClick={()=>navigateTo(2)} className="navigation-link">DSA Articles</button>
    </div>
    <div className="col-10">
    { navigationState === 1 && <Intro></Intro> }
    { navigationState === 2 && <Dsa></Dsa> }
    </div>
  </div>
</div>
      
    </div>
  );
}

export default App;
