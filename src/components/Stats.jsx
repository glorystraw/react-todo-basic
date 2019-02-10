import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
    //TODO Find solution to extract evaluations
    let totalTask = props.todos.length;
    let completedTask = props.todos.filter(todo => todo.completed).length;
    let notCompletedTask = totalTask - completedTask;
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Todo count:</th>
                    <td>{totalTask}</td>
                </tr>
                <tr>
                    <th>Done:</th>
                    <td>{completedTask}</td>
                </tr>
                <tr>
                    <th>Todo:</th>
                    <td>{notCompletedTask}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Stats;