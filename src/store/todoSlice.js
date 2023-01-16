import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        descr: action.payload.descr,
        completed: false
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    toggleTodo(state, action) {
      const toggleTodoComp = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleTodoComp.completed = !toggleTodoComp.completed;
    }
  }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
