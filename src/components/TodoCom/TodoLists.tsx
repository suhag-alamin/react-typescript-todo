import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import { TodoInterface } from "./todoInterface";
import Todos from "./Todos";

const TodoLists = () => {
  // get from localStorage
  const getTodos = JSON.parse(
    localStorage.getItem("todos") || "[]"
  ) as TodoInterface[];

  const [todos, setTodos] = useState<TodoInterface[]>(getTodos);

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

  const handleEditTodo = (updatedTodo: TodoInterface): void => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  useEffect(() => {
    // save to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mx-auto px:4 md:px-20">
      <AddTodo handleAddTodo={handleAddTodo} />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-6">
        <div
          style={{ backgroundColor: "#f26157" }}
          className="p-4 rounded-2xl shadow-lg "
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            Active Tasks
          </h3>
          <Todos
            todos={todos.filter((todo) => !todo.isCompleted)}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        </div>
        <div
          style={{ backgroundColor: "#2f3e46" }}
          className="p-4 rounded-2xl shadow-lg "
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            Completed Tasks
          </h3>
          <div>
            <Todos
              todos={todos.filter((todo) => todo.isCompleted)}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoLists;
