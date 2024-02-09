import React, { useState, useContext } from "react";
import { CartContext } from "../../items/Cart/CartContext";

import "./Card.css";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="card">
      <div
        className="card__img"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? props.image2 : props.image1}
          alt="product image"
          style={{ transition: "opacity 0.3s ease" }}
        />
        <span>pre-order</span>
      </div>
      <div className="card__info">
        <h2>
          {props.title}
          <span>${props.price}</span>
          <button onClick={() => addItemToCart(props)}>shop now</button>
        </h2>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default Card;
