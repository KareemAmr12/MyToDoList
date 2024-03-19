import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const initList = [{id:0, text:'Restock fridge', done: false},
  {id:1, text:'Feed cat', done: true},
  {id:2, text:'Workout', done: false}];

  let nextId = 3;
function ToDoList({tasks, HandleChangeTask, HandleDeleteTask})
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
  

function AddTask({HandleNewTask})
{
  const [text, setText] = useState("");
  return(<div>
    <input placeholder='Add new task' value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={()=>HandleNewTask(text)}>Add</button>
  </div>)
}

function App() {
  const [list, setList] = useState(initList);

  function HandleNewTask(text)
  {
    if(text !== "")
    {
      setList([...list, {id: nextId++, text:text, done: false}])
    }
    else
    {
      alert("Task cannot be empty!")
    }
    
  }

  function HandleChangeTask(task)
  {
    setList(list.map(listItem=>
      {
        if(listItem.id === task.id)
        {return({...listItem, text: task.text, done: task.done})}
        else return listItem;
      }
      ))
  }

  function HandleDeleteTask(id)
  {
    setList(list.filter(task=>task.id !== id))
  }
  return (
    <>
    <h1>My To-Do List!</h1>
    <AddTask HandleNewTask={HandleNewTask}/>
    <ToDoList tasks= {list} HandleChangeTask= {HandleChangeTask} HandleDeleteTask= {HandleDeleteTask}/>
    </>
  );
}

export default App;
