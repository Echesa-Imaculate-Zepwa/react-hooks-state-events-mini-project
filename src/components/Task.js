import React from "react";

function Task({text,category,deleteBtn}) {
  //delete button(_When the delete button is clicked_, the task should be removed from the list.)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>deleteBtn(text)} className="delete">X</button>
    </div>
  );
}
export default Task;