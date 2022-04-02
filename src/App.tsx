import { useState } from 'react';
import './App.css'
import { Input } from './components/input/input';
import { Todo } from './model';
import { TodoList } from './components/todoList';


const App: React.FC = () => {

  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }


  return (
    <div className='containerApp'>
       <h1>TaskList</h1>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}></Input>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  )
}

export default App;
