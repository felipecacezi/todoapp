import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css';

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
    
    return (
        <input 
            className='new-todo'
            placeholder='O que precisa ser feito?'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}/>
    )
};

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
