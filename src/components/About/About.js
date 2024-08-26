import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ms from "../../Assets/ms.png";
import sflc from "../../Assets/sflc.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Container >
        <Row style={{ justifyContent: "center", marginRight: "10%" ,marginLeft: "20%"}}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "10px",
              
            }}
          >
            <h1 style={{ textAlign:"justify", fontSize: "2.1em",color: "#FF5F1F", paddingBottom: "20px" }}>
                 Prachi <strong  className="purple" style={{color:"black"}}>Nandi</strong>
            </h1>
            
            
            <hr/>
            <h1 style={{paddingTop: "20px",textAlign:"justify", fontSize: "1.5em",color: "black", paddingBottom: "20px"}}>Microsoft</h1>       
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1em"}}><b/>Working as Software Engineer under Azure Storage team (to be more specific under Azure Elastic SAN team), Bangalore, India</h2>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1.1em"}}></p>
       
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ms} alt="about" className="img-fluid" style={{width: "30%", paddingTop: "100px"}} />
          </Col>
          
        </Row>
        <Row style={{ justifyContent: "center", marginLeft: "20%", marginRight: "10%" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <hr/>
            <h1 style={{paddingTop: "20px",textAlign:"justify", fontSize: "1.5em",color: "black", paddingBottom: "20px"}}>Microsoft</h1>       
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.1em"}}><b/>SWE Intern, Bangalore, India (May'23 - June'23)</h2>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1em"}}>• Performed and analysed the performance of Elastic SAN REST API using JMeter and Azure load tester.<br/>
• The outcome of this was it improved API efficiency - more granular locking, using scale out strategies, offload processing to async code path when possible. It was also possible to suggest mitigations to API consumers (use sliding window to issue API requests), improve throttling limits etc.<br/>
• Worked on optimizing volume creation process by building a DNS pre-provisioned workflow.</p>
       
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ms} alt="about" className="img-fluid" style={{width: "30%", paddingTop: "100px"}} />
          </Col>
          
        </Row>
        <Row style={{ justifyContent: "center", marginLeft: "20%", marginRight: "10%" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <hr/>
            <h1 style={{paddingTop: "20px",textAlign:"Left", fontSize: "1.5em",color: "black", paddingBottom: "20px"}}>Software Freedomp Law center, India</h1>     
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.1em"}}><b/>Tech Research Assistant Intern , New Delhi, India (May'22-June'22)</h2>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1em"}}>• Web scraping to fetch granted software patents using Selenium(Python).<br/>
• Provided analysis of granted software patents in India by examining various patent journals.</p>
       
      
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={sflc} alt="about" className="img-fluid" style={{width: "30%"}} />
          </Col>
          
        </Row>

        
        
      </Container>
      
     
      {/*inserting the experience cards*/}
      {/*<Container>
       
         <div className="cards" style={{paddingTop: "150px"}}>
        <Row style={{ justifyContent: "center", marginTop: "-150px",paddingBottom: "10px" }}>
          <h1 className="exp-head" style={{fontSize:"2.2em",color: "black"}}>EXPERIENCE
          <hr
        style={{
          marginLeft: '42%',
          background: '#FF5F1F',
          color: '#FF5F1F',
          borderColor: '#FF5F1F',
          height: '5px',
          width:'100px',
          textAlign: "center",
          opacity: '100%',
          marginTop: '30px',
          marginBottom: '50px'
          
        }}
      />
          </h1>
          <Col md={4} className="project-card">
            <ExpCard
              imgPath={sflc}
              isBlog={false}
              title="Tech Research Assistant intern"
              description="I worked on various matters related to Indian Patent Law at SFLC.in. These
              include Researching on patentability of computer programmes per se under the Patents Act, 1970"
              demoLink="https://drive.google.com/file/d/1UH0BL1yl5LEX9c2qzFCgODFDJC-wBwhz/view?usp=sharing"  
             
        
            />
             
          </Col>

          <Col md={4} className="project-card">
            <ExpCard
              imgPath={hacknitr}
              isBlog={false}
              title="Lead Organiser"
              description="HackNITR is an annual flagship event of GDSC NIT Rourkela and OpenCode. As a core team member and PR team lead, organised events, conducted sessions and worked on publicity management to make the hackathon grand and successfull."
              demoLink2="https://dev.to/nandi_prachi/hacknitr-40-5e96"  
            />
             
          </Col>

          <Col md={4} className="project-card">
            <ExpCard
              imgPath={mlsa}
              isBlog={false}
              title="Microsoft Learn Student Ambassador"
              description="Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future. Completed Microsoft Azure learning essentials and conducted sessions in my college."
              demoLink="https://drive.google.com/file/d/1_mdWUb7IJV0Ve8jeCrTwtKrswdoAOH1G/view?usp=sharing"  
            />
             
          </Col>

          
        </Row>
        </div>
      </Container> */}    
         
      

    </Container>
   
  );
  
}

export default About;
