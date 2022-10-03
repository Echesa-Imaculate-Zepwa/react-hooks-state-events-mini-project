
import React from "react";
import Task from "./Task";

//Pass down the task data from `App` to `TaskList`
function TaskList({deleteBtn, tasks}) {
  return (
    <div className="tasks">
      {tasks.map((task,index)=>(
        <Task 
         category={task.category}
          deleteBtn={deleteBtn}
          key={index}
          text={task.text}
         />
      ))}
    </div>
  );
}

export default TaskList