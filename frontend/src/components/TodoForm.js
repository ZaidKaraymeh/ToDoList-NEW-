import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TodoForm({ addtoTodos }) {
  let ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e) => {
    console.log(todo.task);
    setTodo({ ...todo, task: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addtoTodos({ ...todo, id: ID });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="todoForm">
        <Form.Control
          value={todo.task}
          onChange={handleChange}
          type="text"
          placeholder="Enter task..."
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TodoForm;
