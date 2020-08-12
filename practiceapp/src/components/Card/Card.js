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
// function Card(props) {
//   return (
//     <div onClick={() => props.clickIt(props.id)} className="card col-md-3">
//     <div className="img-container">
//       <img alt={props.list.id} src={props.list.image} />
//     </div>
//   </div>
//   );
// }

export default Card;
