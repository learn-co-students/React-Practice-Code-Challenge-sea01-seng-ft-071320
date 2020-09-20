import React from "react";

const Sushi = (props) => {
  const sushi = props.sushi;
  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eatSushi(props.sushi)}>
        {props.eatenSushi ? null : (
          <img src={sushi.img_url} width="100%" alt="" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
