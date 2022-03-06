import Body from '../commons/Body';
import GithubCard from '../components/github-card/github-card';

function Portfolio(){
    return (<Body children={
        <div className="card">
            <div className="card-body">
            <div className="card-title">
            <h2>Portfolio</h2>
            </div>
                <br/>
                <GithubCard />
            </div>
        </div>
    }/>);

}

export default Portfolio;