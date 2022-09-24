import React from "react";
import SingleTodo from "./SingleTodo";
import { TodoInterface } from "./todoInterface";

interface TodosProps {
  todos: TodoInterface[];
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-around">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
