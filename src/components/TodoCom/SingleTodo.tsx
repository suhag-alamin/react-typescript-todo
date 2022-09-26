import React, { useState, useEffect, useRef } from "react";
import { TodoInterface } from "./todoInterface";
import { MdModeEdit, MdDelete, MdDone } from "react-icons/md";

interface Props {
  todo: TodoInterface;
  handleCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (updatedTodo: TodoInterface) => void;
}

const SingleTodo: React.FC<Props> = ({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setEdit(false);
    const updatedTodo: TodoInterface = {
      id: todo.id,
      todo: editTodo,
      isCompleted: todo.isCompleted,
    };
    handleEditTodo(updatedTodo);
  };

  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editRef.current?.focus();
  }, [edit]);

  return (
    <form onSubmit={handleEditSubmit}>
      <div className="single-todo-box p-4 rounded-lg shadow-xl flex justify-between items-center">
        <div>
          {edit ? (
            <input
              className="text-2xl px-2 bg-transparent outline-none border-2 border-green-200	rounded"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              ref={editRef}
            />
          ) : (
            <h3 className="text-2xl border-2 border-transparent px-2">
              {todo.isCompleted ? <del>{todo.todo}</del> : todo.todo}
            </h3>
          )}
        </div>
        <div className="flex gap-2">
          <span>
            <MdModeEdit
              onClick={() =>
                !edit && !todo.isCompleted ? setEdit(!edit) : setEdit(false)
              }
              className="text-xl cursor-pointer	"
            />
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
    </form>
  );
};

export default SingleTodo;
