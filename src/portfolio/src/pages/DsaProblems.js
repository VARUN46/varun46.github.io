import { blogSlugUrlMapping } from '../blogs/blogSlugUrlMapping';
import './DsaProblems.css';

function DsaProblems(){
    const url = window.location.hash;
    const regex = new RegExp("/blog/dsa/(.*)$"); // Regex pattern
    const sol = regex.exec(url);
    const guid = sol[1];
    const blogSlugUrlMappingData = blogSlugUrlMapping();
    if(guid in blogSlugUrlMappingData){
        return (<div className="dsa-page-content">
          {[blogSlugUrlMappingData[guid]].map(c=><div key={guid}>{c.component}</div>)}
            </div>)
    }
    return (<>Not Found</>)

}

export default DsaProblems;