import React from "react";
import Card from "./Card";

function Container1(props) {
  console.log(props.state);
  return (
    <div
      style={{
        display: "flex",
        flex: "0.7",
        backgroundColor: "tomato",
        height: "auto",
        flexWrap: "wrap",
      }}
    >
      {props.state.map((element, index) => (
        <Card
          key={index}
          id={element.id}
          title={element.title}
          author={element.author}
          description={element.description}
        />
      ))}
    </div>
  );
}

export default Container1;
