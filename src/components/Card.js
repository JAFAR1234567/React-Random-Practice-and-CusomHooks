import React from "react";

const Card = ({ cardTitle, cardDes,home }) => {
  return (
    <div
      style={{
        backgroundColor: "goldenrod",
        height: "110px",
        width: "220px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h3>{cardTitle}</h3>
      <h4>{cardDes}</h4>
      <h4>{home}</h4>
    </div>
  );
};

export default Card;
