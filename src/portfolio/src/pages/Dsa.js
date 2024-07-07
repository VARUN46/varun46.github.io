import { useState } from 'react';
import './Dsa.css';
import DsaNArraySumZero from '../blogs/DsaNArraySumZero';

function Dsa(){

    const [blogPage, setBlogPage] = useState([]);

    const openArticle = (id) =>{
        setBlogPage([<DsaNArraySumZero></DsaNArraySumZero>])
    }

    return (<>
      {blogPage.length > 0 && <div className='blog-page'>{blogPage}<h4>Happy Coding !!</h4></div> }
      {blogPage.length === 0 && <div className="dsa-intro-page">
        <h2>Welcome to my DSA problems and solution</h2>
        <p>Below are a few tricky problems, they might help you crack the interview.</p>
        <button onClick={()=> openArticle()} className='navigation-link'>Given a value of N, create an array of N such that it results to zero.</button>
        </div>}
        </>);
}

export default Dsa;