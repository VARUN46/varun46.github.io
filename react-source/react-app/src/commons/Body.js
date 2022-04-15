import React from 'react';
import './Body.css';

function Body(props){
    return (<div id="body">
        <div className="container-fluid">
        { !props.error && props.children}
        { props.error && <div className="card" id="error-body"><div className="alert alert-danger">{props.error}</div></div> }
        </div>
    </div>);
}

export default Body;