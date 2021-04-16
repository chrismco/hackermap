import  React  from "react";

const MoveDownButton = ({ itemIndex, onClick}) => {

  return (
    <button
      onClick={() => onClick(itemIndex)}
      className="icon-only small mx-0"
      data-testid="down-button"
    >
      <i className="material-icons">arrow_downward</i>
    </button>
  );
};

export default MoveDownButton;
