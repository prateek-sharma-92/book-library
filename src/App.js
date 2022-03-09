import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import "./App.css";
import Container1 from "./Container1.jsx";
import Container2 from "./Container2.jsx";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const url = "http://localhost:3000/books";

    await axios.get(url).then((res) => setState(res.data));
  };
  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <div style={{ display: "flex" }}>
        <Container1 state={state} />
        <Container2 />
      </div>
    </>
  );
}

export default App;
