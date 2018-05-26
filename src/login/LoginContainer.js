import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import LoginComponent from './LoginComponent';
import Loader from '../components/Loader';

class LoginContainer extends React.Component {
    state = {
        fields: {
            username: '',
            password: '',
        },
    };

    handleFieldChange = (name, value) => {
        const { fields } = this.state;
        fields[name] = value;
        this.setState({ fields });
    };

    handleLogin = () => {
        this.props.login(this.state.fields);
    };

    render() {
        const { loginState } = this.props;
        if (loginState.isLoading) {
            return <Loader isLoading />;
        }
        return <LoginComponent login={this.handleLogin} fieldChange={this.handleFieldChange} />;
    }
}

const mapStateToProps = state => ({
    loginState: state.login.loginReducer,
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
