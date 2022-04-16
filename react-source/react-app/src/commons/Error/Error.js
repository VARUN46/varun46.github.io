import React from "react";

function Error(props){
    return <>
    <h1>Error!</h1>
    Details: {props.errorInfo}
    </>;
}

export default Error;