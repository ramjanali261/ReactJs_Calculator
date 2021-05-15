import React from "react";
import OutputRow from "./outputRow";

const Output = (props) => {
  return (
    <div style={{ background: "#4db8ff", marginLeft: "10px", marginRight: "10px", marginTop: "5px" }}>
      <OutputRow value={props.answer} textSize={{ fontSize: "20px" }} />
      <OutputRow value={props.user} textSize={{ fontSize: "20px" }} />
    </div>
  );
};

export default Output;
