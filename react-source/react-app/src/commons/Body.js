import React from 'react';
import './Body.css';

function Body(props){
    return (<div id="body">
        <div className="container">
        {props.children}
        </div>
    </div>);
}

export default Body;