import React from "react";

const Card = ({ name, image, species }) => {
  return (
    <div>
      {/* <h1>Hola desde Card</h1> */}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
};

export default Card;
