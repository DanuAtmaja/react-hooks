import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { 
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import uuid from "uuid/v4";

export default function TodoApp() {
  const initialTodos = [
    {id: 1, task: "Clean Fishtank", completed: false},
    {id: 2, task: "Wash Car", completed: true},
    {id: 3, task: "Grow Bread", completed: false}
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
  }
  const removeTodo = todoId => {
    // filter out removed todo
    const updateTodos = todos.filter(todo => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updateTodos);
  }
  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa",
    }}
    elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4} >
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
}


// - TodoApp
//   -TodoForm
//   -TodoList
//     -TodoItem