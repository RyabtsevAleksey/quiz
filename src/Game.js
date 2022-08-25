import React from "react";

export default function Game({ question, onClickVariant, lineResult }) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${lineResult}%` }}
          className="progress__inner"
        ></div>
      </div>

      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li onClick={() => onClickVariant(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
