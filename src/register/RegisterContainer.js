import React from 'react';
import { connect } from 'react-redux';
import { register } from './actions';
import RegisterComponent from './RegisterComponent';
import Loader from '../components/Loader';

class RegisterContainer extends React.Component {
    state = {
        fields: {
            username: '',
            password: '',
            repassword: '',
        },
    };

    handleFieldChange = (name, value) => {
        const { fields } = this.state;
        fields[name] = value;
        this.setState({ fields });
    };

    handleRegister = () => {
        this.props.register(this.state.fields);
    };

    render() {
        const { registerState } = this.props;
        if (registerState.isLoading) {
            return <Loader isLoading />;
        }
        return <RegisterComponent register={this.handleRegister} fieldChange={this.handleFieldChange} />;
    }
}

const mapStateToProps = state => ({
    registerState: state.register.registerReducer,
});

const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(register(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
