import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function HomeScreen() {
  const [todos, setTodos] = useState([]);

  const addtoTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Container className="main">
      <TodoForm addtoTodos={addtoTodos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
}

export default HomeScreen;
