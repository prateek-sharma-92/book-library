import axios from "axios";
import React from "react";

function Card(props) {
  const edit = () => {
    axios
      .put(`http://localhost:3000/books/${props.id}`, { title: "XYZ" })
      .then((res) => console.log(res));
    window.location.reload();
  };

  const Delete = (prateek) => {
    axios
      .delete(`http://localhost:3000/books/${prateek}`)
      .then((res) => console.log(res));
    window.location.reload();
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        height: "auto",
        width: "20vw",
        margin: "1vh",
        marginTop: "7vh",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <b>Book Title:</b> {props.title} <br />
      <b>Book Author:</b> {props.author}
      <br />
      <b>Book description: </b>
      {props.description}
      <br />
      <br />
      <button onClick={edit}>Edit</button>
      <button onClick={() => Delete(props.id)}>Delete</button>
    </div>
  );
}

export default Card;
