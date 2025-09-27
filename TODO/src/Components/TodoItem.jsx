import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className={style.todoItem}>
      <div>
        <div className={style.todoText}>{todoName}</div>
        <div className={style.todoDate}>{todoDate}</div>
      </div>
      <button
        type="button"
        className={style.btnContainer}
        onClick={() => onDeleteClick(todoName)}
      >
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

export default TodoItem;
