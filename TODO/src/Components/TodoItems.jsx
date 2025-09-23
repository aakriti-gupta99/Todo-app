import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ items, onDeleteClick }) => {
  return (
    <div className={style.itemsContainer}>
      {items.map((item, index) => (
        <TodoItem
          key={items.name || index}
          todoDate={item.DueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
