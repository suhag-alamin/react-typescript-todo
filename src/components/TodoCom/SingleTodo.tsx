import React from "react";
import { TodoInterface } from "./todoInterface";
import { MdModeEdit, MdDelete, MdDone } from "react-icons/md";

interface Props {
  todo: TodoInterface;
  handleCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const SingleTodo: React.FC<Props> = ({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="single-todo-box p-4 rounded-lg shadow-lg flex justify-between items-center">
      <h3 className="text-2xl">
        {todo.isCompleted ? <del>{todo.todo}</del> : todo.todo}
      </h3>
      <div className="flex gap-2">
        <span>
          <MdModeEdit className="text-xl cursor-pointer	" />
        </span>
        <span>
          <MdDelete
            onClick={() => handleDeleteTodo(todo.id)}
            className="text-xl cursor-pointer	"
          />
        </span>
        <span>
          <MdDone
            onClick={() => handleCompleteTodo(todo.id)}
            className="text-xl cursor-pointer	"
          />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
