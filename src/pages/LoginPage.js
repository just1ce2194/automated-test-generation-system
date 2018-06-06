import React from 'react';
import {LoginContainer} from '../containers';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginContainer />
            </div>
        );
    }
}

export default withRouter( LoginPage );
