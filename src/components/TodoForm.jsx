import React from "react";
import useInput from "../api/useInput";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, handleTitleChange, resetTitle] = useInput();
  const [body, handleBodyChange, resetBody] = useInput();

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    resetTitle("");
    resetBody("");
  };

  return (
    <form onSubmit={handleAddTodoSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <input
        type="text"
        name="body"
        value={body}
        onChange={handleBodyChange}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoForm;
