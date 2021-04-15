import { React } from "react";

const MoveUpButton = ({ itemIndex, items }) => {
  return (
    <button className="icon-only small mx-0" data-testid="up-button">
      <i className="material-icons">arrow_upward</i>
    </button>
  );
};

export default MoveUpButton;
