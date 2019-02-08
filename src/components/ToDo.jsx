import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import PropTypes from 'prop-types';

function Todo(props) {
    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>

            <Checkbox initiallyChecked={props.completed} />
            <span className="todo-title">{props.title}</span>
            <Button className="delete icon" icon="delete" />


        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo;