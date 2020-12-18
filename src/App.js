import React, {useState, useEffect} from 'react';
import Form from './Form';
import TodoList from'./TodoList';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  

  const [element, setElement] = useState('');

  const [elements, setElements] = useState([]);

  const [status, setStatus] = useState('all');

  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(()=> {
    filterHandler();
  }, [status, elements])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(elements.filter(item => item.completed === true));
        break;

      case 'uncompleted':
        setFilterTodos(elements.filter(item => item.completed === false));
        break;

      default:
        setFilterTodos(elements);
        break;
    }
  }
  

  return (
    <div className='App'>
      <header>
        <h1>Ma Todo List</h1>
        </header>
      <Form 
      element={element} 
      setElement={setElement} 
      setElements={setElements} 
      elements={elements}
      setStatus={setStatus}
      
      />
      <TodoList  
      element={element} 
      setElements={setElements} 
      elements={elements}
      filterTodos={filterTodos}  />

      
    </div>
  )
}


