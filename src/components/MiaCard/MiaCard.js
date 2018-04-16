import React from "react";
import "./MiaCard.css";


const MiaCard = props => (
  <span onClick={() => props.clickMia(props.id)} className="remove">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </span>
);

export default MiaCard;