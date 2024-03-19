import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';

const initList = [{id:0, text:'Restock fridge', done: false},
  {id:1, text:'Feed cat', done: true},
  {id:2, text:'Workout', done: false}];

  let nextId = 3;


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
