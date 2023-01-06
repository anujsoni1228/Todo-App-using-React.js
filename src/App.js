import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Form>

      {todoList.map((item)=>{
        return <Todo item={item} todoList={todoList} setTodoList={setTodoList} ></Todo>
      })}
    </div>
  );
}
export default App;