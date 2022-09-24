import React from "react";
import SingleTodo from "./SingleTodo";
import { TodoInterface } from "./todoInterface";

interface TodosProps {
  todos: TodoInterface[];
  handleCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const Todos: React.FC<TodosProps> = ({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-around">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
