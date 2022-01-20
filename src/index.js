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
return(
    <ul>
  <Tast taskName="yeloyeloyelo"/>
  <Tast  taskName="ice ice ice"/>
  <Tast  taskName="2big tubeg tobeg"/>
  
</ul>  
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