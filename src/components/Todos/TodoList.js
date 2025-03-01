import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div className={styles.todoListConteiner}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
