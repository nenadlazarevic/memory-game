import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.clickedPlayer(props.id)} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
