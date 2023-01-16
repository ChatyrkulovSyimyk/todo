import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, complected, descr }) => {
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <input
        type="checkbox"
        checked={complected}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <div>
        <p>{text}</p>
        <span>{descr}</span>
      </div>

      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
