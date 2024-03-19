import { useState } from "react";

export default function ToDoList({tasks, HandleChangeTask, HandleDeleteTask})
{
  return(
    <ul>
      {tasks.map(task=><Task task={task} HandleChangeTask={HandleChangeTask} HandleDeleteTask={HandleDeleteTask}/>)}
    </ul>
  )
}

function Task({task, HandleChangeTask, HandleDeleteTask})
{
  const [isEditing, setIsEditing] = useState(false);
  
  
  if(isEditing)
  {
    return(
      <li key={task.id}>
        <input type='checkbox' checked={task.done} onChange={()=>alert('Cannot mark task done while editing!')}/>
        <input value={task.text} onChange={(e)=>HandleChangeTask({...task, text:e.target.value})}/>
        <button onClick={()=>setIsEditing(false)}>Save</button>
        <button onClick={()=>HandleDeleteTask(task.id)}>Delete</button>
      </li>
    );
  }
  
else 
    {
      return(
        <li key={task.id}>
          <input type='checkbox' checked={task.done} onChange={(e)=>HandleChangeTask({...task, done: e.target.checked})}/>
          {task.done ? <text style={{ textDecorationLine: 'line-through' }}>{task.text}</text> : task.text}
          <button disabled={task.done} onClick={()=>setIsEditing(true)}>Edit</button>
          <button onClick={()=>HandleDeleteTask(task.id)}>Delete</button>
        </li>
      )
    
  }    
    

}