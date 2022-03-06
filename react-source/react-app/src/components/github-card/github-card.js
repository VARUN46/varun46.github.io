import './github-card.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import GithubCardItem from './github-card-item'; 

function GithubCard(){

    let cardItemsArray = [];
    useEffect(() => {
    
        axios.get('https://api.github.com/users/varun46/repos')
        .then(response=>{
            response.data.forEach(githubRepoItem=>{
                cardItemsArray.push(<GithubCardItem title={githubRepoItem.full_name} description={githubRepoItem.description} />);
            });
        });
});
    return (     
    
    <div className="container">
    <div className="github-portfolio">
        <h3>Github Portfolio</h3>
        {cardItemsArray}
    </div>
</div>);
}

export default GithubCard;