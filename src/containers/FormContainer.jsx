import { connect } from 'react-redux';
import Form from '../components/Form';
import { addTodo } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (id, title) => dispatch(addTodo(id, title))
    };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;