import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.store = this.props.store;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        let title = event.target.value;
        this.setState({ title });
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="Add new task" onChange={this.handleChange} />
                <CustomButton type="submit">Add</CustomButton>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;