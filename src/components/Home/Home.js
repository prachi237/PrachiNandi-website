import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/about2.jpg";

import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{marginTop: "-5%"}}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: -5 }} className="heading">
               {" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Prachi </strong>
                <strong className="main-name2">Nandi</strong>
              </h1>
              
              <Container className="HomeContent">
              <p style={{ paddingLeft: "30%", fontSize: "1em",textAlign: "justify" ,color: "rgb(61, 61, 61)"}}>
             I am currently a software engineer in the Azure Storage team at <a href="https://www.microsoft.com/en-in" target="_blank">Microsoft</a>, India. I graduated in the year 2024 from <a href="https://www.nitrkl.ac.in/" target="_blank">NIT Rourkela </a>with honours in Computer Science and Engineering.
             <br/>
             My area of interest is in Quantitative Finance, specifically in portfolio management and mathematical methods for quantitative finance.
            <br/> In my free time I love spending time with books and play chess, here in <a href="https://www.goodreads.com/user/show/155288657-prachi-nandi" target="_blank">goodreads</a> you can find my book reviews. Also I am <a href="https://in.pinterest.com/prachi237/_created" target="_blank">art</a>, politics and history fanatic:)). 
            <br/> I would like to extend a cordial invitation to you to join me for a game of <a href="https://lichess.org/@/prachi237">Chess</a>
              </p>
           </Container>
              
           <Container className="Links" style={{paddingLeft: "25%"}}>
              <ul className="home-about-social-links" >
              <li className="social-icons">
                <a
                  href="https://github.com/prachi237"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prachi-nandi-461641198/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/nandi_prachi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
            </Container>
            </Col>
            
            <Col md={5} style={{ paddingBottom: 0 }}>
              <img
                src={profilePic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px", marginTop: "25%" }}
              />
            </Col>

      
        <Container className="skills" style={{paddingLeft: "18%"}}>
        <h1 style={{paddingTop: "20px",textAlign:"justify", fontSize: "1.5em",color: "black", paddingBottom: "20px"}}>Accademic Interest</h1>
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.2em"}}><b/>Research</h2>
        <p className="prachi" style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)", fontSize: "1em"}}>I am interested in pursuing a research career focused on developing algorithms and harnessing the<b/>
         power of AI/ML in the field of finance.</p>
        
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.2em"}}><b/>Competitive Programming/ Problem Solving</h2>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1em"}}>1500+ Questions solved in verious coding platforms. (leetcode, Interviewbit, HackerRank, Codeforces, codechef,  etc)</p>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1em"}}>Link to all my coding profiles in various online coding sites can be found <a href="https://linktr.ee/prachiNandi" target="_blank">here</a></p>
        
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.2em"}}><b/>Hackathons/Competitions</h2>
        <p className="prachi"style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1em"}}>I enjoy participating in hackathons and working on cool projects. The team collaboration, along with the pressure of deadlines and the challenge of limited time, really excites me. </p>
        
        </Container>

          </Row>
          

        </Container>
        
      </Container>
    </section>
  );
}

export default Home;
