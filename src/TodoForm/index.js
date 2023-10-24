import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoForm.css';

function TodoForm(){
const {
    setOpenModal,
    addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(    
        <form onSubmit={onSubmit}>
            <label>Escribe el nuevo TODO</label>
            <textarea 
                placeholder="Nuevo TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoFormButtonContainer">
                <button 
                type="button"
                className="TodoFormButton 
                TodoFormButtonCancel"
                onClick={onCancel}
                >Cancelar</button>
                <button 
                type="submit"
                className="TodoFormButton 
                TodoFormButtonAdd"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };