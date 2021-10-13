import React from "react";
import "./imgtag.css";

function ImageTag(props) {
  console.log("loggin in imgtag ", props.source);
  return (
    <div className="imgtag__img">
      <img src={props.source} />
    </div>
  );
}

export default ImageTag;
