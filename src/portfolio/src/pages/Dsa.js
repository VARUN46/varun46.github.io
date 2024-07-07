import './Dsa.css';
import { Link } from 'react-router-dom';

function Dsa(){
    return (<>
      <div className="dsa-intro-page">
        <h2>Welcome to my DSA problems and solution</h2>
        <p>Below are a few tricky problems, they might help you crack the interview.</p>
        <Link to = {'/blog/dsa/1'} className='navigation-link'>Given a value of N, create an array of N such that it results to zero.</Link>
        </div>
        </>);
}

export default Dsa;