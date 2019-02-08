import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
    return(
        <header>
                <h1>{props.title}</h1>
            </header>
    );
}

Header.propsTypes = {
    title: PropTypes.string.isRequiered
}

export default Header;