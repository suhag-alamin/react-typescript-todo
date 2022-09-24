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

  const handleDeleteTodo: (id: number) => void = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo: (id: number) => void = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  // const handleEditTodo: (id: number, newTodo: string) => void = (
  //   id,
  //   newTodo
  // ) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,

  console.log(todos);

  return (
    <div className="container mx-auto px-20">
      <AddTodo handleAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoLists;
