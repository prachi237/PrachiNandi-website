import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function ExpCards(props) {
  return (
    <Card className="project-card-view" style={{}}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
  
        
        

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
           
            {"Completion certificate"}
          </Button>
        )}
        {!props.isBlog && props.demoLink2 && (
          <Button
            variant="primary"
            href={props.demoLink2}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
    
            {"Know more"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExpCards;