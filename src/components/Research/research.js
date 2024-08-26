import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nitr from "../../Assets/nitr.png";
import sflc from "../../Assets/sflc.png";



function Research() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", marginLeft: "15%", marginRight: "10%" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ textAlign:"justify", fontSize: "2.1em",color: "#FF5F1F", paddingBottom: "20px" }}>
                 Prachi <strong  className="purple" style={{color:"black"}}>Nandi</strong>
            </h1>
            
            <hr/>
            <h1 style={{paddingTop: "20px",textAlign:"justify", fontSize: "2em",color: "black", paddingBottom: "20px"}}></h1>       
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.2em"}}><b/></h2>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1.1em"}}></p>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1.1em"}}></p>

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            
          </Col>
          
        </Row>
       
        
        
      </Container>
      
     
      

    </Container>
   
  );
  
}

export default Research;
