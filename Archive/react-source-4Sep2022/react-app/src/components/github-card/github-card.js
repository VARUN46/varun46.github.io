import './github-card.css';
import GithubCardItem from './github-card-item'; 

function GithubCard(props){
    
    return (     
    
    <div className="container">
    <div className="github-portfolio">
        <h3>Github Portfolio</h3>
        {props.cardItemsArray.map(item=>{
            return <GithubCardItem key={item.id} title={item.full_name} description={item.description} />
        })}
    </div>
</div>);
}

export default GithubCard;