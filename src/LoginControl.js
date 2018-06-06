import {connect} from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

const {Component} = React;

class LoginControl extends Component {
    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        const {loggedIn} = this.props;
        const isLoginUrl = this.props.location.pathname === '/login';

        if ( loggedIn && isLoginUrl ) {
            window.location.href = '/dashboard';
        }
        if ( !loggedIn && !isLoginUrl ) {
            window.location.href = '/login';
        }
    }

    render() {
        const {loggedIn} = this.props;
        const isLoginUrl = this.props.location.pathname === '/login';
        if ( loggedIn && isLoginUrl ) {
            return <div className="loginContainer">
                Logged in. Redirecting...
                </div>;
        }
        if ( loggedIn || isLoginUrl ) {
            return this.props.children;
        }

        return null;
    }
}


const mapStateToProps = ( state ) => {
    return ( {
        loggedIn: state.visibleUser.loggedIn,
    } );
};


const LoginControlContainer = withRouter( connect( mapStateToProps )( LoginControl ) );

export default LoginControlContainer;
