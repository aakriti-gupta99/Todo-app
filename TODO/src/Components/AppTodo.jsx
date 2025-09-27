import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName.trim() === "") {
      setError("Please add item");
      return;
    }
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
    setError("");
  };
  return (
    <div>
      <div className="container">
        {error && <p className="error">{error}</p>}
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
              <IoIosAddCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
