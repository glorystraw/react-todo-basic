import React from 'react';
import PropTypes from 'prop-types';

function CustomButton(props) {

    const { onClick, className, icon, children } = props;
    return (
        <button className={className} onClick={onClick} >
            {icon ?
                <i className="material-icons">{icon}</i>
                :
                children
            }
        </button>
    );
}

CustomButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default CustomButton;