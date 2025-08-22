import React from "react";
import "../index.css";

const TodoItem = (props) => {
  return (
    <li className="flex justify-between items-center border mb-2 px-2 rounded-md">
      {props.completed ? (
        <span className="flex gap-2 items-center line-through opacity-50">
          <input type="checkbox" className="input" checked />
          <p className="pb-1">{props.name}</p>
        </span>
      ) : (
        <span className="flex gap-2 items-center">
          <input type="checkbox" className="input" />
          <p className="pb-1">{props.name}</p>
        </span>
      )}
    </li>
  );
};

export default TodoItem;
