import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item w-full h-full mt-5">
      <Link to={`/product/${props.id}`}>
        <img
          className="object-cover object-center w-full h-full block"
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <div className="details mt-5">
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;