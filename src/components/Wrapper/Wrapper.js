import React from "react";
import "./wrapperStyle.css";

function Wrapper(props) {
  return <div className="container">
    <div className="row">
    {props.children}
            {props.children}
            </div>
            </div>;
}

export default Wrapper;
