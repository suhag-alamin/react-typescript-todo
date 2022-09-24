import "./App.css";
import TodoLists from "./components/TodoCom/TodoLists";

const App: React.FC = () => {
  return (
    <div className="App py-2">
      <h1 className="text-4xl text-center font-bold	my-4 z">
        What's your plan for Today?
      </h1>
      <TodoLists />
    </div>
  );
};

export default App;
