import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Description, setDescription] = useState("");

  const addBook = () => {
    let newData = {
      title: Title,
      author: Author,
      description: Description,
    };
    const url = "http://localhost:3000/books";
    axios
      .post(url, newData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    window.location.reload();
  };
  return (
    <div style={{ position: "fixed", margin: "8vh 7vw" }}>
      <input
        type="text"
        placeholder="Enter book title"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          borderRadius: "20px",
          height: "4vh",
          margin: "0.5vh",
          padding: "0.2em",
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter book Author"
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
          borderRadius: "20px",
          height: "4vh",
          margin: "0.5vh",
          padding: "0.2em",
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter book Description"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          borderRadius: "20px",
          height: "4vh",
          margin: "0.5vh",
          padding: "0.2em",
        }}
      />
      <br />
      <button
        type="submit"
        onClick={addBook}
        style={{
          borderRadius: "20px",
          height: "4vh",
          width: "15vw",
          margin: "0.5vh",
          padding: "0.2em",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Form;
