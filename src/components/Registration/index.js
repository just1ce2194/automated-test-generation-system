import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './styles.scss';

const {Component} = React;
const message = 'Ви подали заявку на регістрацію, після того як адміністратор її підтвердить, ви зможете авторизуватись в системі. Дякуємо!';

class Registration extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            message: '',
        };

        this.handleRegistration = this.handleRegistration.bind(this);
    }

    handleRegistration() {
        const user = this.state;
        const onSuccess = () => {
            this.setState( { message : message } );
        };
        this.props.registration( user, onSuccess );
    }

    render() {
        if ( this.state.message !== '' ) {
            return <div className="loginContainer">
                    <Typography component="p">
                        {this.state.message}
                    </Typography>
                    </div>;
        }
        return <div className="loginContainer">
            <div>
                <TextField
                    onChange={( e ) => this.setState( {name: e.target.value} )}
                    label="І'мя"
                    margin="normal"/>
            </div>
            <div>
                <TextField
                    onChange={( e ) => this.setState( {surname: e.target.value} )}
                    label="Фамілія"
                    margin="normal"/>
            </div>
            <div>
                <TextField
                    onChange={( e ) => this.setState( {email: e.target.value} )}
                    label="Емейл"
                    margin="normal"/>
            </div>
            <div>
                <TextField
                    onChange={( e ) => this.setState( {username: e.target.value} )}
                    label="Юзернейм"
                    margin="normal"/>
            </div>
            <div>
                <TextField
                    onChange={( e ) => this.setState( {password: e.target.value} )}
                    label="Пароль"
                    margin="normal"
                    type="password"/>
            </div>
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleRegistration}>
                Зареєструватися
                </Button>
                <Link to={'/login'}>
                    <Button variant="outlined" color="primary">
                        Ввійти
                    </Button>
                </Link>
            </div>
        </div>;
    }
}

export default withStyles(styles)(Registration);


