import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const {Component} = React;


class Login extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            login: '',
            password: '',
        };

        this.handleLogIn = this.handleLogIn.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
    }

    handleLogIn() {
        const {login, password} = this.state;
        this.props.logIn( login, password );
        // TODO : show error
    }

    onPasswordChange( event ) {
        const value = event.target.value;
        this.setState({
            password: value,
        });
    }

    onLoginChange( event ) {
        const value = event.target.value;
        this.setState({
            login: value,
        });
    }

    render() {
        return <div className="loginContainer">
            <div>
                <TextField
                    onChange={this.onLoginChange}
                    label="Юзернейм"
                    margin="normal"/>
            </div>
            <div>
                <TextField
                    onChange={this.onPasswordChange}
                    label="Пароль"
                    margin="normal"
                    type="password"/>
            </div>
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleLogIn}>
                    Ввійти
                </Button>
                <Link to={'/registration'}>
                    <Button variant="outlined" color="primary">
                        Зареєструватися
                    </Button>
                </Link>
            </div>
        </div>;
    }
}

Login.propTypes = {};

export default withStyles(styles)(Login);


