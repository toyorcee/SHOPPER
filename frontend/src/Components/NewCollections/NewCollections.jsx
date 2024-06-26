import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Items/Item";

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch("https://shopper-kl9l.onrender.com/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_Collection(data));
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections-item grid grid-cols-2 gap-1">
        {new_collection.map((item, i) => {
          return (
            <Item
              className="item"
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

export default NewCollections;
