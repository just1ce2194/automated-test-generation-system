import React from 'react';
import {VariantContainer, HeaderContainer} from '../containers';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class VariantPage extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <div className="contentWrapper">
                    <VariantContainer />
                </div>
            </div>
        );
    }
}

export default withRouter( VariantPage );
