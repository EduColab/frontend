import React from "react";

const cards = ({src, title}) => {
  return (
    <div className="card">
      <img
        src={src}
        alt="Imagen"
      />
      <div className="card-content">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default cards;
