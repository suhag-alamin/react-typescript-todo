import React, { useRef } from "react";

const AddTodo = ({
  handleAddTodo,
}: {
  handleAddTodo: (text: string) => void;
}) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit: (e: React.FormEvent) => void = (e) => {
    e.preventDefault();
    if (todoRef.current && todoRef.current.value !== "") {
      const todo = todoRef.current.value;
      handleAddTodo(todo);
      todoRef.current?.blur();
      todoRef.current.value = "";
    } else {
      alert("Please enter a todo");
      todoRef.current?.blur();
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a todo"
        ref={todoRef}
      />
      <button className="todo-button">Add</button>
    </form>
  );
};

export default AddTodo;
