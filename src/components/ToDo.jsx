import proptypes from 'prop-types'
import { useState } from 'react'
import './todo.css'



export const ToDo = ({ item, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)



    const FormEdit = () => {

        const [newValue, setNewValue] = useState(item.title)

        const handleSubmit = (e) => {
            e.preventDefault()
            handleUpdateToDo()

        }

        const handleChangeToDo = (e) => {
            const value = e.target.value
            setNewValue(value)
        }

        const handleUpdateToDo = () => {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }




        return (
            <form onSubmit={handleSubmit} >
                <div key={item.id} className='row border-bottom py-3'>
                    <div className='col-10'>
                        <input type='text' className='form-control form-control-sm ' onChange={handleChangeToDo} value={newValue}></input>
                    </div>
                    <div className="col-2">
                        <div className='float-end px-3'>
                            <i className="fa-solid fa-retweet update-icon" onClick={handleUpdateToDo}></i>
                        </div>
                        <div className='float-end'>
                            <i className="fa-solid fa-xmark cancel-icon" onClick={() => setIsEdit(false)}></i>
                        </div>
                    </div>

                </div>
            </form>
        )
    }

    const TodoElement = () => {
        return (
            <>
                <div key={item.id} className='row border-bottom py-3' >
                    <div className='col-10'>
                        {item.title}
                    </div>
                    <div className='col-2 '>
                        <div className='float-end '>
                            <i className="fa-solid fa-trash delete-icon" onClick={() => onDelete(item.id)}></i>
                        </div>
                        <div className='float-end px-3' onClick={() => setIsEdit(true)}>
                            <i className="fa-solid fa-pen-to-square edit-icon"></i>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='px-2'>
                {
                    isEdit ? <FormEdit /> : <TodoElement />
                }
            </div>
        </>
    )
}

ToDo.propTypes = {
    item: proptypes.object.isRequired
}

