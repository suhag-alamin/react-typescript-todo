import { useRef } from "react";

const AddTodo = ({
  hanldeAddTodo,
}: {
  hanldeAddTodo: (text: string) => void;
}) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const hanldeSubmit: (e: any) => void = (e) => {
    e.preventDefault();
    if (todoRef.current && todoRef.current.value !== "") {
      const todo = todoRef.current.value;
      hanldeAddTodo(todo);
      todoRef.current.value = "";
    } else {
      alert("Please enter a todo");
    }
  };

  return (
    <form className="todo-form" onSubmit={hanldeSubmit}>
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
