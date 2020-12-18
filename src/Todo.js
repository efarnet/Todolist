import React from 'react'

export default function Todo(props) {

    const supprimeClick = () => {

        props.setElements(props.elements.filter(elem => elem.id !== props.itemId));
        
    }

    const completeHandler = () => {

        props.setElements(props.elements.map(item => {  

            if(item.id === props.itemId) {
                return {
                    ...item, completed: !props.itemCompleted
                };
            }
                return item;
            
        }));
     
    };

        
    return (
        <div>
            <div className="todo">
                <li className={`todo-item ${props.itemCompleted ? "completed" : ''}`}>{props.item}</li>
                <button  onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
                <button onClick={supprimeClick} className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </div>
    )
}
