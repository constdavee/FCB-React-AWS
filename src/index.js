import React from "react";
import reactDom from "react-dom";
import "./index.css";

function HelloWorld(){
    return <div className="app">
        <header className="app-header">
           <h1> My Amazing To-do-list</h1>
      
            <p>
            The most simple and amazing todo-list React app.
            </p>
        
            <ul>
                <li className="tasks-item">
                   pagbilan yelo
                </li>
                <li className="tasks-item">
                    kumain kanaba
                </li>
                <li className="tasks-item">
                    ako oo
                </li>
            </ul>  
        </header>
    </div>
}

reactDom.render(<HelloWorld></HelloWorld>, document.getElementById("root"));