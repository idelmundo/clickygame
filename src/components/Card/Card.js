import React from "react";
import "./cardStyle.css";


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
       {/* function for image that was clicked already!!! */}
        <img src={props.image} alt={props.id} onClick={() => props.handleIncrement(props.id)} />
      </div>
    
    </div>
  );
}


export default Card;

