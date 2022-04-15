import Body from '../../commons/Body';
import GithubCard from '../../components/github-card/github-card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Portfolio.css';

function Portfolio(){
    const [cardItemsArray, setCardItemsArray] = useState([]);
    const [error,setError]= useState('');
    useEffect(() => {
    
        axios.get('https://api.github.com/users/varun46/repos')
        .catch(function(error){
            setError(`OOPS!! Cannot fetch portfolio details right now !! Reason: ${error.response.data.message}`);
        })
            .then(response=>{    
                console.log(response); 
                const responseCollection = [];     
                response.data.forEach(githubRepoItem=>{
                    responseCollection.push({ full_name:githubRepoItem.full_name, description: githubRepoItem.description });
            });
            setCardItemsArray(responseCollection);
        });
    });

    return (<Body children={
        <div id="portfolio-card" className="card">
            <div className="card-body">
            <div className="card-title">
            <h2>Portfolio</h2>
            </div>
                <br/>
                {!error && 
                <GithubCard cardItemsArray={cardItemsArray} />}
                {error}
            </div>
        </div>
    }/>);

}

export default Portfolio;