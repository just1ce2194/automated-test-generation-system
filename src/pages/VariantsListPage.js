import React from 'react';
import {VariantsListContainer, HeaderContainer} from '../containers';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class VariantsListPage extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <VariantsListContainer />
            </div>
        );
    }
}

export default withRouter( VariantsListPage );
