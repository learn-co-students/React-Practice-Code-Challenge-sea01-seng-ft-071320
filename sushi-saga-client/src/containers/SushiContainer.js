import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  const sushis = [];

  for (const i of props.page) {
    if (!props.sushis[i]) {
      break;
    }
    sushis.push(props.sushis[i]);
  }

  return (
    <Fragment>
      <div className="belt">
        {sushis.map((sushi) => (
          <Sushi
            {...sushi}
            key={sushi.id}
            handleClick={() => props.handleClick(sushi.id)}
          />
        ))}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
