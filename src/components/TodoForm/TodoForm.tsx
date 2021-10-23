import React, { useRef, FC } from 'react'
import styles from './TodoForm.module.css'
import { ITodoFormProps } from '../../interfaces/todoInterface'

const TodoForm: FC<ITodoFormProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAddTodo(inputRef.current!.value)
      inputRef.current!.value = ''
    }
  }

  return (
    <div className={styles.TodoForm}>
      <label htmlFor="todo">Enter to do</label>
      <input
        onKeyPress={keyPressHandler}
        ref={inputRef}
        type="text"
        id="todo"
        placeholder="example: Buy milk"
      />
    </div>
  )
}

export default TodoForm