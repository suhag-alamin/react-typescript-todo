import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const TodoLists = () => {
  const hanldeAddTodo: (todo: string) => void = (todo) => {
    console.log(todo);
  };

  return (
    <div className="container mx-auto px-20">
      <AddTodo hanldeAddTodo={hanldeAddTodo} />
      <Todos />
    </div>
  );
};

export default TodoLists;
