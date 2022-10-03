import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [task, setTask] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [btnSelectCategory, setbtnSelectCategory] = useState('All')
  
  
//add item
  function addNewItemtoList(newItem){
    setTask([...task,newItem])
  }
//delte item
  function deleteBtn(deleteBtn){
    setTask(task.filter((item) => item.text !== deleteBtn))
  }
 

  const itemDisplayed = task.filter(
    (item) => { 
    if(btnSelectCategory ==='All') return true
    return btnSelectCategory === item.category
   } 
   )

  
          

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onButton = {btnSelectCategory}
        selectedButton = {setbtnSelectCategory} 
      />
      <NewTaskForm
        onTaskFormSubmit = {addNewItemtoList}
        categories = {categories}
      />
      <TaskList 
        deleteBtn = {deleteBtn}
        tasks={itemDisplayed} />
    </div>
  );
}
export default App;