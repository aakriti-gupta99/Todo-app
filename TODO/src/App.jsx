import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, DueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemsName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      <TodoItems items={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      {todoItems.length === 0 && <WelcomeMessage />}
    </div>
  );
}

export default App;
