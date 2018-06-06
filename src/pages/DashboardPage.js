import React from 'react';
import {DashboardContainer, HeaderContainer} from '../containers';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <DashboardContainer />
            </div>
        );
    }
}

export default withRouter( DashboardPage );
