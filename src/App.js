import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';
import NewTodo from './components/NewTodo'

const App = () => {

    const [todos, setTodos] = useState([]);    

    const onNewTodo = (value) => {
        setTodos([...todos, {
            id: new Date().getTime(),
            title: value,
            checked: false
        }]);
    }

    return (
    
        <section id='app' className='container'>
    
            <header>

                <h1 className='title'>Todo App</h1>

            </header>
    
            <section className='main'>
                <NewTodo onNewTodo={onNewTodo} />
                <ul className='todo-list'>
                    {
                        todos.map((todo)=>(
                            <li key={todo.id}>
                                <span className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                                    onClick={()=>{onToggle(todo)}}
                                    role='button'
                                    onKeyPress={()=>{onToggle(todo)}}>{todo.title}</span>
                                <button className='remove'
                                        type="button"
                                        onClick={() => { onRemove(todo) }}>
                                    <MdDelete size={28}/>
                                </button>
                            </li>
                        ))
                    }
                </ul>

            </section>
    
        </section>
    
    );
}


export default App;
