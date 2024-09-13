import React from "react";
import "./Avatar.css";

const avatarColors = ["green", "blue", "red", "orange", "purple"];
const availabilityColors = ["#ccc", "#2ecc71"];
const Avatar = ({ initial, id, available = false }) => {
  const availabilityColor = available ? availabilityColors[1] : availabilityColors[0];

  return (
    <div className="Avatar" style={{ backgroundColor: avatarColors[id % 5], marginRight: "12px" }}>
      <span style={{ fontSize: "smaller" }}>{initial}</span>
      <div
        className="Online__indicator"
        style={{ backgroundColor: availabilityColor }}
      ></div>
    </div>
  );
};

export default Avatar;
