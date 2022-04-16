import React from "react";
import './Error.css';

function Error(props){
    return <div className="container">
    <div className="card error-wrapper">
    <h1>Error!</h1>
    Details: {props.errorInfo}
    </div>
    </div>;
}

export default Error;