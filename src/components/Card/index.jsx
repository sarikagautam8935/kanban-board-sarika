import React from "react";
import "./Card.css";
import Tag from "../Tag";
import Avatar from "../Avatar";
import { priorityIcons, progressIcons } from "../Icons";
const Card = ({ data, user, grouping }) => {
  const { title, tag, id } = data;
  const name = user.name;
  const userId = parseInt(user.id.split("-")[1]) - 1;
  const initial = name
    ? name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("")
    : "initial";

  return (
    <div className="Card">
      {/* Card header section */}
      <header className="Card__header" >
        <span style={{ fontSize: "medium", color: "#808080"  }}>{id}</span>
        {grouping !== 1 && (
          <Avatar initial={initial} available={user.available} id={userId} />
        )}
      </header>

      {/* Card main content section */}
      <section
        style={{
          flexGrow: 1,
          display: "flex",
          gap: "0rem",
          alignItems: "center",
        }}
      >
        {grouping !== 0 && progressIcons(data.status)}
        <p style={{ fontSize: "13px" }}>{title}</p>
      </section>

      {/* Card footer section */}
      <footer style={{ gap: "0rem", display: "flex", alignItems: "center" }}>
        {grouping !== 2 && <span>{priorityIcons(data.priority)}</span>}
        {tag.map((tag, id) => (
          <Tag key={id} text={tag} />
        ))}
      </footer>
    </div>
  );
};

export default Card;
