import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addToDo(state, action) {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

export const todoActions = todoSlice.actions;

export default store;
