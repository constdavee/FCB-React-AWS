import React from "react";
import reactDom from "react-dom";
import "./index.css";
import Task from "./components/Task"
import TaskList from "./components/Tasklist";





function HelloWorld(){
    return <div className="app">
        <header className="app-header">
           <h1> My Amazing To-do-list</h1>
      
            <p>
            The most simple and amazing todo-list React app.
            </p>
            <Task />
        <TaskList />
        
        </header>
    </div>
}

reactDom.render(<HelloWorld></HelloWorld>, document.getElementById("root"));