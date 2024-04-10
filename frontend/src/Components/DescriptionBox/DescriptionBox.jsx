import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox m-4">
      <div className="decsriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description flex">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias tenetur nobis? Consequatur necessitatibus, in excepturi enim aliquid explicabo harum sequi ut accusamus dolores autem doloribus, atque pariatur minus unde. Accusantium voluptates suscipit aut placeat incidunt reiciendis ullam tempora dolorem id, cumque in nemo ut laboriosam similique amet quia natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias tenetur nobis? Consequatur necessitatibus, in excepturi enim aliquid explicabo harum sequi ut accusamus dolores autem doloribus, atque pariatur minus unde. Accusantium voluptates suscipit aut placeat incidunt reiciendis ullam tempora dolorem id, cumque in nemo ut laboriosam similique amet quia natus.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
