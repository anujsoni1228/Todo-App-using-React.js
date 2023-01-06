import styles from "./style.module.css";
export default function Todo({item , todoList, setTodoList}){
    const doneBtn=(event)=>{
        // console.log(event.target.previousSibling.textContent);
        setTodoList(todoList.filter((item)=>{
            return item!=event.target.previousSibling.textContent;
        }));
    }
    return (
        <div className={styles.todoContainer}>
            <h3 className={styles.todoItem}>{item}</h3>
            <button className={styles.doneBtn} onClick={doneBtn}>&#10060;</button>
        </div>
    );
}