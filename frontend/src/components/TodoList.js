import React from "react";
import { Col, Container } from "react-bootstrap";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Col key={todo.id}>{todo.task}</Col>;
      })}
    </div>
  );
}

export default TodoList;
