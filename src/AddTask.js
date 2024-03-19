import { useState } from "react";

export default function AddTask({HandleNewTask})
{
  const [text, setText] = useState("");
  return(<div>
    <input placeholder='Add new task' value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={()=>HandleNewTask(text)}>Add</button>
  </div>)
}
