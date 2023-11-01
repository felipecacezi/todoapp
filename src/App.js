import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {

    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const initialTodos = [
        { id: 1, title: 'Estudar react', checked: false },
        { id: 2, title: 'Estudar inglês', checked: true },
        { id: 3, title: 'Estudar frances', checked: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const [ value, setValue ]= useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const submit = () => {
        console.log('submit', value);
        erase();
    }

    const erase = () => {
        setValue('');
    }

    const onKeyDown = (event) => {

        switch (event.which) {
            case ESCAPE_KEY:
                erase();
            break;
            case ENTER_KEY:
                submit();
            break;
            default:
                return;
            break;
        }

    }

    return (
    
        <section id='app' className='container'>
    
            <header>

                <h1 className='title'>Todo App</h1>

            </header>
    
            <section className='main'>

                <input 
                    className='new-todo'
                    placeholder='O que precisa ser feito?'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}/>

                <ul className='todo-list'>
                    {
                        todos.map((todo)=>(
                            <li key={todo.id}>
                                <span className='todo'>{todo.title}</span>
                                <button className='remove'
                                        type="button">
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
