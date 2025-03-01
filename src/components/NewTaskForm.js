
import React, {useState} from "react";
//"calls the onTaskFormSubmit callback prop when the form is submitted
function NewTaskForm({onTaskFormSubmit,categories}) {
  
  const [newItemFields, setNewItemFields]=useState({
    text:'',
    category:'Code'
  })
 
  function handleFields(e){
    const{name,value}=e.target
    setNewItemFields({...newItemFields,[name]:value})
    
  }
  // console.log(newItemFields)
  
  return (
    <form
    onSubmit={(e)=>{
      e.preventDefault()
      onTaskFormSubmit(newItemFields)}}
    className="new-task-form"
    >
      <label>
        Details
        <input value={newItemFields.text} onChange={handleFields}  type="text" name="text" />
      </label>

      <label>
        Category
        <select value={newItemFields.category} onChange={handleFields} name="category">
          {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;