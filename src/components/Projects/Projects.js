import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import agro from "../../Assets/Projects/agro.png";
import farm from "../../Assets/Projects/farm4.jpg";
import sista from "../../Assets/Projects/sista.png";
import parkify from "../../Assets/Projects/parkify.jpg";
import codher from "../../Assets/Projects/codher.png";
import leo from "../../Assets/Projects/leo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <div className="project-head"> 
      <p style={{ color: "black" ,position: "absolute",
  left: "100", padding:"10px"}}>
          PORTFOLIO  
          <hr
        style={{
          
          background: '#FF5F1F',
          color: '#FF5F1F',
          borderColor: '#FF5F1F',
          height: '3px',
          opacity: '100%'
        }}
      />
        </p>
        
        <h1 className="project-heading" style={{ color: "black" ,position: "absolute",
  left: "100", marginTop:"60px", width: "200px"}}>
          <strong className="purple">MY WORKS</strong>
        </h1>
        </div> 
      <Container>

        <div className="cards" style={{paddingTop: "150px"}}>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farm}
              isBlog={false}
              title="FARMITO (Hackathon Winner: Jan-2023)"
             
              description2="Farmito delivers farm products to customers directly from the nearest farm/farmers, as a result, the customer gets fresh food  and the farmers get the direct profit without any need for traditional middleman involvement."
              demoLink="https://www.notion.so/Farmito-23d852d8a12844ed88db867fbbf9d8ec"
              demoLink1="https://prachinandi237.wixsite.com/my-site-2"
              demoLink2="https://github.com/prachi237/Farmito"
            />
             
          </Col>
           
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agro}
              isBlog={false}
              title="AGRITECH"
              description="Agritech act as an agricultural assistant to the farmer in four aspects: Detect soil moisture content Automate Irrigation Track plant health status Crop Yield Prediction Our solution is a collaborative effort of IoT, deep learning and web development."
              demoLink="https://github.com/prachi237/Agritechs" // Notion link
              demoLink1="https://agritech-codecampers.netlify.app/"
              demoLink2="https://github.com/prachi237/Agritechs"
              
                       
            />
          </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkify}
              isBlog={false}
              title="Parkify (Hackathon Winner: Feb-2023)"
              description="It overcomes the problem of finding a parking lot in commercial areas that unnecessary consumes time. Parkify offers a web based reservation system where users can view various parking areas and reserve the space"
              demoLink2="https://github.com/prachi237/hack-ccelerate"
              demoLink="https://github.com/prachi237/hack-ccelerate"
              demoLink1="https://github.com/prachi237/hack-ccelerate"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codher}
              isBlog={false}
              title="CODHRESGRAM (Hackathon winner: Nov-2021)"
              description="Social media App where women in STEM fields can connect to each other discuss projects, exchange ideas, share their problems, seek for collaboration to work on projects."
              demoLink="https://devpost.com/software/codhersgram"
              demoLink1="https://codhersgram.vercel.app/"
              demoLink2="https://github.com/prachi237/Codhersgram"
              
            />
          </Col>
         </Row>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sista}
              isBlog={false}
              title="SISTA (Hackathon winner: Feb-2022)"
              description="Helps women in STEM to form communities and empower. Implemented Kmean clustering algorithm ,built ML model using
              python libraries: NumPy,Matplotlib,Pandas." 
              demoLink="https://www.canva.com/design/DAEwGh7C1eA/yuTGRBoTMVLWSu6IGau5fg/view?utm_content=DAEwGh7C1eA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              demoLink1="https://www.figma.com/proto/9zZOHMNSKaL7wz1fA0TMlM/StormHacks?node-id=1%3A15&scaling=min-zoom&starting-point-node-id=1%3A15"
              demoLink2="https://github.com/prachi237/Sista"
              
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leo}
              isBlog={false}
              title="LEO CLUB OFFICIAL WEBSITE"
              description="Developed the official website of LEO using React.Js.
              • Chief mode of publicity for the chapter with feature volun‐
              teer management for 100+ volunteers and 5+ initiatives."
              demoLink="#"
              demoLink1="https://leo-clubnitr.netlify.app/"
              demoLink2="https://github.com/prachi237/leo-club"
              />
          </Col>
        </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
