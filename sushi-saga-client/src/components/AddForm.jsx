import React from "react";

function AddForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="add" value={props.add} onChange={props.handleChange} />
      <input type="submit" value="Add more money!" />
    </form>
  );
}

export default AddForm;
