import React from "react";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div>
      <div className="container">
        <div className="row kG-row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-danger btndanger"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
