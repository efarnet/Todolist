import React from 'react'
import Todo from './Todo'


export default function TodoList(props) {



            return (
            <div className="todo-container">
                <ul className="todo-list">
                    {props.filterTodos.map((item) => (
                        <Todo 
                        element={props.element} 
                        key={item.id} 
                        elements={props.elements} 
                        setElements={props.setElements} 
                        item={item.text} 
                        itemId={item.id} 
                        itemCompleted={item.completed}
                        />
                    ))}
                
                </ul>
            </div>
            )

        }
    
        
    