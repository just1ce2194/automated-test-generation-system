import React from 'react';
import {VariantContainer, HeaderContainer} from '../containers';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class VariantPage extends Component {
    render() {
        const testId = this.props.match.params.id;

        if ( !testId ) {
            debugger;
        }

        return (
            <div>
                <HeaderContainer />
                <div className="contentWrapper">
                    <VariantContainer testId={testId}/>
                </div>
            </div>
        );
    }
}

export default withRouter( VariantPage );
