import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

function Header(props) {
    return (
        <header>
            <Stats todos={props.todos} />
            <h1>{props.title}</h1>
        </header>
    );
}

Header.propsTypes = {
    title: PropTypes.string.isRequiered,
    todos: PropTypes.array.isRequired
}

export default Header;