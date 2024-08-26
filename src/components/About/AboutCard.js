import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
     
        <h1 style={{paddingTop: "20px",textAlign:"justify", fontSize: "2em",color: "black", paddingBottom: "20px"}}>Microsoft</h1>
        <p style={{ textAlign: "justify" , color: "rgb(61, 61, 61)",fontSize: "1.1em"}}>
        I graduated from National Institute of Technology (NIT) Rourkela, India with honours in Computer Science and Engineering (CSE) major.
        </p>
       
        <h1 style={{paddingTop: "20px",textAlign:"justify", fontSize: "2em",color: "black", paddingBottom: "20px"}}>Skills</h1>
      
        <h2 style={{textAlign: "justify" , color: "black",fontSize: "1.5em"}}><b/>Competitive Programming/ Problem Solving</h2>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1.1em"}}>1500+ Questions solved in verious coding platforms. (leetcode, Interviewbit, HackerRank, Codeforces, codechef,  etc)</p>
        <p style={{ textAlign: "justify" ,color: "rgb(61, 61, 61)",fontSize: "1.1em"}}>Link to all my coding profiles in various online coding sites can be found <a href="https://linktr.ee/prachiNandi" target="_blank">here</a></p>

      </Card.Body>
      
    </Card>
  );
}

export default AboutCard;
