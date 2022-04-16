import Body from '../../commons/Body';
import GithubCard from '../../components/github-card/github-card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Portfolio.css';

function Portfolio(){
    const [cardItemsArray, setCardItemsArray] = useState([]);
    useEffect(() => {
    
        axios.get('https://api.github.com/users/varun46/repos')
            .then(response=>{    
                const responseCollection = [];     
                response.data.forEach(githubRepoItem=>{
                    responseCollection.push({ full_name:githubRepoItem.full_name, description: githubRepoItem.description });
            });
            setCardItemsArray(responseCollection);
        });
    });
    
    //ToDo: Add Error boundary
    //ToDo: Add Child Component inside body component 
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