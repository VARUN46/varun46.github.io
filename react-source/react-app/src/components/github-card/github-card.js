import './github-card.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GithubCardItem from './github-card-item'; 

function GithubCard(){

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
    return (     
    
    <div className="container">
    <div className="github-portfolio">
        <h3>Github Portfolio</h3>
        {cardItemsArray.map(item=>{
            return <GithubCardItem key={item.id} title={item.full_name} description={item.description} />
        })}
    </div>
</div>);
}

export default GithubCard;