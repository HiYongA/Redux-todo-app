import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../api/useInput";
import { switchTodo } from "../redux/modules/todos";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const editedTodo = todos.find((todo) => todo.id === id);

  const [editedTitle, handleEditedTitle] = useInput();
  const [editedBody, handleEditedBody] = useInput();

  const handleEditedTodoSubmit = (e) => {
    e.preventDefault();

    if (!editedTitle || !editedBody) {
      return alert("수정할 내용을 입력해주세요!");
    }

    if (editedTodo) {
      const updatedTodo = {
        id,
        title: editedTitle,
        body: editedBody,
      };
      dispatch(switchTodo(updatedTodo));
      navigate("/");
    }
    return false;
  };
  return (
    <form onSubmit={handleEditedTodoSubmit}>
      <input
        type="text"
        name="editedTitle"
        value={editedTitle}
        onChange={handleEditedTitle}
      />
      <input
        type="text"
        name="body"
        value={editedBody}
        onChange={handleEditedBody}
      />
      <button type="submit">수정완료하기</button>
      <button onClick={() => navigate("/")}>취소하기</button>
    </form>
  );
};

export default Edit;
