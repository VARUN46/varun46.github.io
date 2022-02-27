import React from "react";
import Body from '../commons/Body';
import './Home.css';
import { FaSearchLocation } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaRegSmileBeam } from "react-icons/fa";

function Home(){
    return (
    <Body children={
      <div id="id-card" className="card">
  <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <img src="https://res.cloudinary.com/dfptza4sj/image/upload/v1633241218/Portfolio/Me_hfwalc.png" className="card-img-top" alt="Varun Setia"/>
            <h5 className="card-title">Varun Setia</h5>
            </div>
            <div className="col-md-8">
            <p className="card-text">Hey, this is my introduction!</p>
            <p className="location"><FaSearchLocation/> Delhi</p>
            <p> I am a full stack developer, my main area of focus is<span className="big-icon"> <AiOutlineCloudServer/> </span>cloud oriented development. </p>
            <p>6X Certified in Azure Cloud!</p>
            <p>I am system designing enthusiast.</p>
            <p><span className="exper">4+ Years </span></p>
              
            </div>
          </div>
        </div>
  </div>
  <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
        <p>I have worked across many verticals of technology. I have developed enterprise applications by following proper design and architecture guidelines. I had focused mainly on developing scalable microservices solution. The solutions built are majorly deployed on cloud infrastructure.</p>
        <p> I had worked on front-end technologies namely Angular, React and jQuery. This website has been built on ReactJs by me.</p>
        <p>In backend technologies, i had worked on .NET Core and Node JS.</p>
        <p>The database technologies includes SQL and No-SQL namely SQL Server, MySQL, MongoDB and RedisDB.  </p>
        <p>The cloud platforms that i had explored are Azure and AWS. My main expertise is in Azure Cloud.</p>
        <p>Also, for microservices i had worked on Docker platform and very basic in Kubernetes.</p>
        <p>Thank you so much for investing your time on reading this. <FaRegSmileBeam/></p>
            </div>
          </div>
        </div>
  </div>
</div>
    }>
  </Body>);
}

export default Home;