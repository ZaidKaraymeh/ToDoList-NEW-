import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function HomeScreen() {
  const [todos, setTodos] = useState([]);

  const addtoTodos = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <Container>
      <TodoForm addtoTodos={addtoTodos} />
      <TodoList todos={todos} />
    </Container>
  );
}

export default HomeScreen;
