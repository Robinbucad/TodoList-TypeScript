import { Todo } from "../../model"
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import './style.css'
import { useState } from "react"

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault()
        setTodos(todos.map(e => (
            todo.id===id ? {...todo, todo:editTodo} : todo
        )))
        setEdit(false)
    }

    return (
        <form className='todoCard' onSubmit={e => handleEdit(e,todo.id)}>

            {edit ? <input type='text' onChange={(e) => setEditTodo(e.target.value)} value={editTodo}></input> : todo.isDone ?
                <s>{todo.todo}</s>
                :
                <p>{todo.todo}</p>}




            <div className="iconsDiv">
                <span onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}><AiFillEdit></AiFillEdit></span>
                <span onClick={() => handleDelete(todo.id)}><BsFillTrashFill></BsFillTrashFill></span>
                <span onClick={() => handleDone(todo.id)}><MdDone></MdDone></span>
            </div>
        </form>
    )
}