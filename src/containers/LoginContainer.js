import {Login} from '../components';
import {connect} from 'react-redux';

import * as VisibleUserActions from '../actions/VisibleUserActions';

const mapStateToProps = ( state ) => {
    return ( {
        loggedIn: state.visibleUser.loggedIn,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        logIn: ( username, password ) => {
            dispatch( VisibleUserActions.logIn( username, password) );
        },
    };
};

const LoginContainer = connect( mapStateToProps,
    mapDispatchToProps )( Login );

export default LoginContainer;
