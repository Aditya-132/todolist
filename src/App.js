import React from "react";
import { useState } from "react";

function App(){
  const [task,settask]=useState('');
  const [list,setlist]=useState([]);
 
  const update=()=>{
    setlist([... list,task]);
    console.log(list);
    settask([''])

  };
  const taskout=(index)=>{
const newList=list.filter((elem,id)=>{
  return index !== id;
});
   setlist(newList);
  }
  
  return(
    <>
    <h1>TO DO List</h1>
    <input type="text" placeholder="add task" value={task} onChange={(event)=> settask(event.target.value)}></input>
    <button onClick={update}>Add</button>
    {
      list.map((value,index)=>{


        return(
          <>
          <ul>
          <li key={index}>{value}</li>
          </ul>
          <button onClick={()=>taskout(index)}>delete</button>
          </>
          
        )
      })
    }

    </>
  )
}
export default App