import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const todo = todos.find((todo) => todo.id === id);
  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
    </div>
  );
};

export default Detail;
