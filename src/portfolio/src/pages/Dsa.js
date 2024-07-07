
import { blogSlugUrlMapping } from '../blogs/blogSlugUrlMapping';
import './Dsa.css';
import { Link } from 'react-router-dom';

function Dsa(){

  const blogSlugUrlMappingData = blogSlugUrlMapping();
  const slugs = Object.keys(blogSlugUrlMappingData);

  const links = slugs.map(bsu=>
    <Link key={bsu} to={`${`/blog/dsa/${bsu}`}`}>
      {blogSlugUrlMappingData[bsu].title}
      </Link>)
  


return (<>
      <div className="dsa-intro-page">
        <h2>Welcome to my DSA problems and solution</h2>
        <p>Below are a few tricky and few my favourite problems, they might help you crack the interview.</p>
       {links}
        </div>
        </>);
}

export default Dsa;