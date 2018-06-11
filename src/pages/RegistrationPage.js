import React from 'react';
import {RegistrationContainer} from '../containers';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class RegistrationPage extends Component {
    render() {
        return (
            <div>
                <RegistrationContainer />
            </div>
        );
    }
}

export default withRouter( RegistrationPage );
