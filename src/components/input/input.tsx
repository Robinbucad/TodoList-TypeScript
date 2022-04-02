import './style.css'

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent) => void
}

export const Input:React.FC<Props> = ({todo, setTodo, handleAdd}:Props) => {

  

    return (
        <div className="appContainer">
            <form onSubmit={handleAdd}>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} className='inputTask' placeholder='Introduza tarea' type='text'></input>
                <button className='btnAdd' type="submit">Añadir</button>
            </form>

        </div>
    )
}