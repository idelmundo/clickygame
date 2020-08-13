import React from "react";
import "./cardStyle.css";
import "../../friends.json"




function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={props.handleIncrement} />
      </div>
    
    </div>
  );
}


export default Card;
