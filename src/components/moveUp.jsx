import  React  from "react";

const MoveUpButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className="icon-only small mx-0" data-testid="up-button">
      <i className="material-icons">arrow_upward</i>
    </button>
  );
};

export default MoveUpButton;
