import  React  from "react";

const MoveUpButton = ({ itemIndex, onClick }) => {
  return (
    <button onClick={() => onClick(itemIndex)} className="icon-only small mx-0" data-testid="up-button">
      <i className="material-icons">arrow_upward</i>
    </button>
  );
};

export default MoveUpButton;
