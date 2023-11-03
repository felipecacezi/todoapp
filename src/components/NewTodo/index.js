import React, { useState } from 'react'

const NewTodo = ({ onNewTodo }) => {

    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [ value, setValue ]= useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const submit = () => {
        if (onNewTodo) {
            onNewTodo(value);
            erase();
        }
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
        <input 
            className='new-todo'
            placeholder='O que precisa ser feito?'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}/>
    )
};

export default NewTodo;
