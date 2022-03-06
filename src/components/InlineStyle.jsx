import React from "react";

const containerSytle = {
  border: "solid 2px #392eff",
  borderRadius: "20px",
  padding: "8px",
  margin: "8px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};
const titleSytle = {
  margin: 0,
  color: "#3d8408"
};
const buttonSytle = {
  backgroundColor: "#abedd8",
  border: "none",
  padding: "8px",
  borderRadius: "8px"
};

export const InlineStyle = () => {
  return (
    <>
      <div style={containerSytle}>
        <p style={titleSytle}>-InlineStyle-</p>
        <button style={buttonSytle}>FIGHT!!</button>
      </div>
    </>
  );
};
