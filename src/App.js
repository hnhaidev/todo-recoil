import React from "react";
import "./App.css";

import NewTask from "./components/new-task";
import TodoList from "./components/todo-list";
import Filter from "./components/filter";

function App() {
  return (
    <div className="App">
      <h1>Todo List with RecoilJs</h1>
      <NewTask />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
