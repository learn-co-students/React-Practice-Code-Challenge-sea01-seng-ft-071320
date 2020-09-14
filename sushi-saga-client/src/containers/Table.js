import React, { Fragment } from "react";
import AddForm from "../components/AddForm";

const Table = (props) => {
  const renderPlates = (array) => {
    return array.map((id, index) => {
      return (
        <div key={id} className="empty-plate" style={{ top: -7 * index }} />
      );
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.remaining} remaining!</h1>
      <AddForm
        add={props.add}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
