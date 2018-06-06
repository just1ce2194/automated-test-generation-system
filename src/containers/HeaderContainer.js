import {Header} from '../components';
import {connect} from 'react-redux';

import * as VisibleUserActions from '../actions/VisibleUserActions';

const mapStateToProps = ( state ) => {
    return ( {
        user: state.visibleUser,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        logOut: () => {
            VisibleUserActions.logOut();
        },
    };
};

const HeaderContainer = connect( mapStateToProps,
    mapDispatchToProps )( Header );

export default HeaderContainer;
