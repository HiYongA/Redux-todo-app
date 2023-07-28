import React from "react";
import Header from "../components/common/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
      <Header />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </div>
  );
};

export default Home;
