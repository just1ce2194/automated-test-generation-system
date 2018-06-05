import React from 'react';
import {VariantsListContainer, HeaderContainer} from '../containers';

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

export default VariantsListPage;
