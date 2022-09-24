import React from "react";
import { TodoInterface } from "./todoInterface";

interface Props {
  todo: TodoInterface;
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="single-todo-box p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl">{todo.todo}</h3>
    </div>
  );
};

export default SingleTodo;
