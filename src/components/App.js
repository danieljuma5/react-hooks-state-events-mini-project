import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
   const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onDelete = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };


  const onAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onAddTask}/>
      <TaskList onDelete={onDelete} tasks={filteredTasks.map((task, index) => ({ ...task, index }))}/>
    </div>
  );
}

export default App;
