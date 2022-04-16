import React from "react";
import Body from '../../commons/Body';
import './Home.css';

function Home(){
    return (
    <Body>
      <div id="id-card">
  <div className="card-body">
        <div className="container-fluid">
          <div className="row">
            <div className="about-pic">
            <img src="https://res.cloudinary.com/dfptza4sj/image/upload/v1633241218/Portfolio/Me_hfwalc.png" className="card-img-top" alt="Varun Setia"/>
            </div>
            <div className="about-content">
            <h2 className="person-title">MEET VARUN</h2>
            <p>Varun Setia has 7 Azure Cloud Certifications and Alteryx Core Certified. He is system designing enthusiast and have worked across many verticals of technology. I have developed enterprise applications by following proper design and architecture guidelines. I had focused mainly on developing scalable microservices solution. The solutions built are majorly deployed on cloud infrastructure.
         He had worked on front-end technologies namely Angular, React and jQuery.
        In backend technologies, he has worked on .NET Core and Node JS.
        The database technologies includes SQL and No-SQL namely SQL Server, MySQL, MongoDB and RedisDB.  
        The cloud platforms that he had explored are Azure and AWS. His main expertise is in Azure Cloud.
        Also, for microservices he has worked on Docker platform and basic configurations in Kubernetes.</p>
        
            </div>
          </div>
        </div>
  </div>
</div>
  </Body>);
}

export default Home;