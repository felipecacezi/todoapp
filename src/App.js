import React, { useState } from 'react';
import './App.css';

const App = () => {

    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

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

            </section>
    
        </section>
    
    );
}


export default App;
