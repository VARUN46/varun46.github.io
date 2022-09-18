import Body from '../../commons/Body';
import GithubCard from '../../components/github-card/github-card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Portfolio.css';

function Portfolio(){
    const [cardItemsArray, setCardItemsArray] = useState([]);
    const [error,setError] = useState('');
    useEffect(() => {
        axios.get('https://api.github.com/users/varun46/repos')
        .catch((error)=>{
            setError(error);
        })
            .then(response=>{    
                const responseCollection = [];     
                if(response && response.data){
                response.data.forEach(githubRepoItem=>{
                        responseCollection.push({ full_name:githubRepoItem.full_name, description: githubRepoItem.description });
                    });
                }
            setCardItemsArray(responseCollection);
        });
    },[]);
    
    return (<Body>
        <div className="card portfolio-card">
            <div className="card-body">
            <div className="card-title">
            <h2>Portfolio</h2>
            </div>
                <br/>
                <GithubCard cardItemsArray={cardItemsArray} />
            </div>
        </div>
        </Body>);

}

export default Portfolio;