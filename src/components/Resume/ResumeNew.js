import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Prachi-Nandi_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const resumeLink =
  "https://firebasestorage.googleapis.com/v0/b/prachito.appspot.com/o/resume_Prachi_Nandi.pdf?alt=media&token=1d1c0f88-94ab-46fa-a8dc-e67de3ad420a";
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
    
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
  left: "100", marginTop:"60px", width: "220px"}}>
          <strong className="purple">MY RESUME</strong>
        </h1>
        </div> 

        <div className="resumeContent" style={{marginTop: "10%", fontSize: "1.2em"}}>
            </div>   
          
        <div className="resume-sec" style={{marginLeft: "15%", width: "70%" }}>

        
        
       
         <iframe  src="https://firebasestorage.googleapis.com/v0/b/prachito.appspot.com/o/resume_Prachi_Nandi.pdf?alt=media&token=1d1c0f88-94ab-46fa-a8dc-e67de3ad420a" frameborder="0" height="500px" width="100%"  style={{paddingTop: "30px",height: "1200px" ,width:"80%"}}></iframe>
         
        </div>
      </Container>
    </div>
    
  );
}

export default ResumeNew;
