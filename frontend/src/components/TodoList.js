import React from "react";
import Todo from "./Todo";
function TodoList({ todos, setTodos }) {
  return (
    <div className="tasks">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        );
      })}
    </div>
  );
}

export default TodoList;
