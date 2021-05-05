import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
function Todo({ todo, todos, setTodos }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleClick = () => {
    isCompleted ? setIsCompleted(false) : setIsCompleted(true);
  };

  const removeToDo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <Col className="todo">
      <ul
        className="todo-item"
        style={{
          color: "black",
          textDecoration: isCompleted ? "line-through" : null,
        }}
        key={todo.id}
        className="mb-3"
      >
        {todo.task}
      </ul>
      <div className="checkbox-btn-container ">
        <form>
          <input
            className="px-2 checkbox-btn"
            value={todo.completed}
            type="checkbox"
            id={todo.id}
            onClick={handleClick}
          />
        </form>
      </div>
      <button className=" delete-btn   " onClick={removeToDo}>
        X
      </button>
    </Col>
  );
}

export default Todo;
