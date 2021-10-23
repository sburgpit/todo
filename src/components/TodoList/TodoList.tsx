import React, { FC } from "react";
import styles from "./TodoList.module.css";
import { ITodoListProps } from "../../interfaces/todoInterface";

const TodoList: FC<ITodoListProps> = ({ todos, onRemove, onToggle }) => {

  if (!todos.length) {
    return (
      <div className={styles.NoTodos}>No todo's</div>
    )
  }

  return (
  <ul className={styles.TodoList}>
    {todos.map((todo) => {
      return (
        <li
          key={todo.id}
          className={todo.completed ? styles.TodoCompleted : ""}
        >
          <label htmlFor="done" onClick={onToggle.bind(null, todo.id)}>
            <input
              type="checkbox"
              checked={todo.completed}
            />
            <span>{todo.title}</span>
            <div onClick={onRemove.bind(null, todo.id)}>+</div>
          </label>
        </li>
      );
    })}
  </ul>
)};

export default TodoList;
