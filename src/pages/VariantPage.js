import React from 'react';
import {VariantContainer, HeaderContainer} from '../containers';

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

export default VariantPage;
