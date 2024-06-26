import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("https://shopper-kl9l.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <div className="popular h-full w-full mt-5">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item grid grid-cols-2 gap-1">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
