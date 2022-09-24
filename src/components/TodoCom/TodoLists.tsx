import { useState } from "react";
import AddTodo from "./AddTodo";
import { TodoInterface } from "./todoInterface";
import Todos from "./Todos";

const TodoLists = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleAddTodo: (todo: string) => void = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        todo,
        isCompleted: false,
      },
    ]);
  };

  console.log(todos);

  return (
    <div className="container mx-auto px-20">
      <AddTodo handleAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default TodoLists;
