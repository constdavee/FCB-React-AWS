
import { useState } from "react";
import Task from "./Task";



function TaskList() {
    
const [taskItemList, setTaskItemList] = useState (["yeloyeloyelo", "ice ice ice", "2big tubeg tobeg", "HAHAHHAHokay", "kaan2k somuch"]);
   

    const [taskValue, setTaskValue] = useState("isa pang task");

    console.log("taskValue: ", taskValue);

    const inputChangeHandler = (e) =>{
       
        setTaskValue (e.target.value)
    }

    const addTaskHandler = (e) =>{
        setTaskItemList([taskValue, ...taskItemList])
        setTaskValue("");
    }
    

return(

    


    <div>
        <input className="task-input" 
        placeholder="Create new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
        />

    <ul>
 {taskItemList.map((task, index ) => {
     
     return <Task key ={index} taskName={task} />; //bangis nag uupdate
 })}

</ul>  </div>
);
}

export default TaskList;