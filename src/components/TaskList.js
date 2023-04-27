import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      {/* displaying a list of tasks using Task component */}
      { tasks.map((task,index) => (
      <Task key={index} text={task.text} category={task.category} onDelete={onDelete}/>
        ))}
      
    </div>
  );
}

export default TaskList;
