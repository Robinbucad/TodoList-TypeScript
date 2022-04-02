import { Todo } from "../../model";
import { SingleTodo } from "../singleTodo";
import './style.css'

interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList: React.FC<Props> = ({todos,setTodos}:Props) => {

    console.log(todos)

    return(
        <div className='todosList'>
            {todos.map((todo) => (
                <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}></SingleTodo>
            ))}
        </div>
    )
}