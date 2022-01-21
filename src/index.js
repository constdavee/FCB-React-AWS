import React from "react";
import reactDom from "react-dom";
import "./index.css";

function Tast(props){



return(

  <li className="tasks-item">
     {props.taskName}
    </li>
    
    
);
}


function TaskLsist() {

    const taskItemList = ["yeloyeloyelo", "ice ice ice", "2big tubeg tobeg", "HAHAHHAHokay"];




return(

    <div>
        <input className="task-input" />
    <ul>
 {taskItemList.map((task, index ) => {
     
     return <Tast key ={index} taskName={task} />; //bangis nag uupdate
 })}

</ul>  </div>
);
}


function HelloWorld(){
    return <div className="app">
        <header className="app-header">
           <h1> My Amazing To-do-list</h1>
      
            <p>
            The most simple and amazing todo-list React app.
            </p>
        <TaskLsist />
          
        </header>
    </div>
}

reactDom.render(<HelloWorld></HelloWorld>, document.getElementById("root"));