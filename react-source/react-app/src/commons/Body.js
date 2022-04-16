import React from 'react';
import './Body.css';
import Error from './Error/Error';

///This class Body is also error boundary for all the components
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false,errorInfo:'' };
      }
      static getDerivedStateFromError(error,errorInfo) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true,errorInfo };
      }

    render() 
    {
    if(this.state.hasError){
        return <Error errorInfo={this.state.errorInfo} />;
    }

    return(<div class="body">
        <div className="container-fluid">
        { this.props.children}
        </div>
    </div>)
    };
}

export default Body;