import React from "react";

let divStyle = (imgUrl) => {
  return { backgroundImage: `url(${imgUrl})` };
};

function ClickItGood(props) {
  return (
    <div className="click-image"
      id={props.id}
      style={divStyle(props.image)}
      onClick={() => props.handleImageClick(props.id)} >
    </div>
  );
}

export default ClickItGood;