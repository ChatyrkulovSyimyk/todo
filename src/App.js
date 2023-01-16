import "./styles.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Show from "./components/show";
import { addTodo } from "./store/todoSlice";
import { useDispatch } from "react-redux";

export default function App() {
  const [text, setText] = useState("");
  const [descr, setDescr] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text, descr }));
    setText("");
    setDescr("");
  };

  return (
    <div className="App">
      <Show
        text={text}
        descr={descr}
        handleText={setText}
        handleDescr={setDescr}
        handleSubmit={addTask}
      />
      <TodoList />
    </div>
  );
}
