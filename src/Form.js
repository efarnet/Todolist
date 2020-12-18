import React, {useState} from 'react'
import TodoList from './TodoList'

export default function Form(props) {

const onChangeHandler =(e) => {

    props.setElement(e.target.value);
    

}

const onClickHandler = (e) => {

    e.preventDefault();

    props.setElements([...props.elements, {
            text: props.element,
            id: Math.random() * 100,
            completed: false
    }]);
    props.setElement('');
   
}

const statusHandler = (e) => {

    props.setStatus(e.target.value)

}
   
      return (   
        
    <form  >
            <input  
            type="text" 
            className="todo-input"
            value={props.element}
            onChange={onChangeHandler}
            
             />
                <button 
                className="todo-button" 
                type="submit"
                onClick={onClickHandler}
                
                >
                    <i className="fas fa-plus-square"></i>
                </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
    </div>
    
    
  </form>

  
      );
}
