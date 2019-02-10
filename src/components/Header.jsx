import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

function Header({ todos }) {
    //TODO Make title as component
    return (
        <header>
            <Stats todos={todos} />
            <h1>React Redux ToDo</h1>
        </header>
    );
}

Header.propsTypes = {
    title: PropTypes.string.isRequiered,
    todos: PropTypes.array.isRequired
}

export default Header;