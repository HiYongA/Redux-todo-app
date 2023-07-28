import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeTodo } from "../redux/modules/todos";

const TodoList = ({ isDone }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleRemoveBtnClick = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditBtnClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h2>{isDone ? "Done" : "Todo"}</h2>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid powderblue",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Link to={`/${todo.id}`}>상세보기</Link>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button onClick={() => handleEditBtnClick(todo.id)}>수정</button>
              <button onClick={() => handleRemoveBtnClick(todo.id)}>
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
