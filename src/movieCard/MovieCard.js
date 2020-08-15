import React from "react";
import "./MovieCard.css";
export default function MovieCard(props) {
  return (
    <div className="card">
      <div className="titleContainer">
        <p className="title">{props.title}</p>

        <p className="rating">{props.rating}</p>
        <i className="glyphicon glyphicon-star"></i>
      </div>
      <iframe
        width="950"
        height="500"
        src={"https://www.youtube.com/embed/" + props.url}
      ></iframe>
      <p className="descrip">{props.descrip}</p>
    </div>
  );
}
