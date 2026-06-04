import { useState } from "react";
import RenderTodoList from "./RenderTodoList";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [inputBox, setInputBox] = useState("");

  function deleteTodo(id) {
    setTodoItems((todoItems) => todoItems.filter((todo) => todo.id !== id));
  }

  function completedTodos(id) {
    setTodoItems((todoItems) =>
      todoItems.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  }

  function addTodo() {
    if (!inputBox.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      description: inputBox,
      complete: false,
    };
    setTodoItems((todoItems) => [...todoItems, newTodo]);
    setInputBox("");
  }

  return (
    <div className="bg-white w-110 h-150 rounded-lg px-2 py-4 overflow-auto">
      <div className="flex justify-between mb-4">
        <div>
          <input
            value={inputBox}
            onChange={(e) => setInputBox(e.target.value)}
            type="text"
            placeholder="Add your task..."
            className="bg-gray-200 px-4 py-2 w-80 rounded-3xl outline-none text-lg placeholder-gray-950"
          />
        </div>
        <div>
          <button
            className="bg-orange-600 w-25 px-6 py-2 rounded-3xl text-white text-lg hover:cursor-pointer"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
      </div>
      <RenderTodoList
        todoItems={todoItems}
        completedTodos={completedTodos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todo;
