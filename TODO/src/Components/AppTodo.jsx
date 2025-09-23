import { useState } from "react";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            ></input>
          </div>

          <div className="col-4">
            <input
              type="date"
              value={dueDate}
              onChange={handleDateChange}
            ></input>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-success add-row"
              onClick={handleAddButtonClicked}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
