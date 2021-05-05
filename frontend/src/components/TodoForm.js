import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TodoForm({ addtoTodos }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addtoTodos({
        ...todo,
        id: "_" + Math.random().toString(36).substr(2, 9),
      });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ display: "flex", padding: "1rem" }}>
      <Form.Group controlId="todoForm">
        <Form.Control
          value={todo.task}
          onChange={handleChange}
          type="text"
          placeholder="Enter task..."
        />
      </Form.Group>

      <button
        className="form-submit-btn"
        style={{ marginLeft: "1rem" }}
        type="submit"
      >
        Submit
      </button>
    </Form>
  );
}

export default TodoForm;
