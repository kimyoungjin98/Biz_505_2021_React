import React from "react";

function CompButton({ child, onClick }) {
  return <button onClick={onClick}>{child}</button>;
}

export default CompButton;
