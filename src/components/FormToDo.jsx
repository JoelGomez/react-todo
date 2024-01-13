import { useState } from "react"
import { ToDo } from "./ToDo"


export const FormToDo = () => {
    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!userInput) return

        const newTodo = {
            id: crypto.randomUUID(),
            title: userInput,
            completed: false
        }

        setTodoList([newTodo, ...todoList])
        setUserInput('')
    }

    const handleUpdate = (id, newValue) => {
        const temp = [...todoList]
        const item = temp.find(item => item.id === id)
        item.title = newValue
        setTodoList(temp)
    }

    const handleDelete = (id) => {
        const temp = todoList.filter(item => item.id !== id)
        setTodoList(temp)
    }

    const handleTerminate = (id) => {

    }



    return (
        <>
            <div className="container">
                <form className="my-5" onSubmit={handleSubmit}>
                    <div className="row justify-content-md-center ">
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                autoFocus
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                            />
                        </div>
                        <div className="col-1">
                            <input type="submit" value="Add" className="form-control btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="container ">
                <div className="row justify-content-md-center">
                    <div className="col-7">
                        {
                            todoList.map(item => (
                                <ToDo item={item} key={item.id} onUpdate={handleUpdate} onDelete={handleDelete} onTerminate={handleTerminate} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
