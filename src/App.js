import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {

    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [todos, setTodos] = useState([]);
    const [ value, setValue ]= useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const submit = () => {
       
        setTodos([...todos, {
            id: new Date().getTime(),
            title: value,
            checked: false
        }]);

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

    const onToggle = (todo) => {

        setTodos(
            todos.map(
                (obj) => obj.id === todo.id 
                    ? { ...obj, checked: !todo.checked } 
                    : obj 
            )
        );
    }

    const onRemove = (todo) => {

        const newTodos = todos.filter((obj) => obj.id !== todo.id);
        setTodos(newTodos);
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
