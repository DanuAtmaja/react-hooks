import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
