import React from "react";

const CardHover = (props) => {
  return (
    <div className="card-hover-card">
      <div className="card-hover-content">
        <div className="front">
          <img  loading="lazy"  width="" height=""   src={props.cardDeatils.bgImg} alt="cardDeatils" />
        </div>
        <div className="back from-bottom">
          <h5>{props.cardDeatils.contentHead}</h5>
          <p>
           {props.cardDeatils.contentBody}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHover;
