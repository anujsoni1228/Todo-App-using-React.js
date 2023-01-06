import styles from "./style.module.css";
export default function Form({ todo, setTodo, todoList, setTodoList }) {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (todo != "") 
    setTodoList([...todoList, todo]);  
    setTodo("");
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          className={styles.inputtodo}
          placeholder="Enter the To-do Task"
        ></input>
        <button
          type="submit"
          onClick={handleClick}
          className={styles.addtodobtn}
        >
          Add to To-do List
        </button>
      </form>
    </div>
  );
}
