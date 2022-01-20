import React from "react";
import reactDom from "react-dom";
import "./index.css";

function HelloWorld(){
    return <div className="app">
        <header className="app-header">
            My Amazing To-do-list
      
        <p>
            The most simple and amazing todo-list React app.
        </p>  </header>
    </div>
}

reactDom.render(<HelloWorld></HelloWorld>, document.getElementById("root"));