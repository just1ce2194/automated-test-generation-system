import {Registration} from '../components';
import {connect} from 'react-redux';
import * as VisibleUserActions from '../actions/VisibleUserActions';


const mapStateToProps = ( state ) => {
    return ( {
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        registration: ( user, onSuccess ) => {
            dispatch( VisibleUserActions.registration( user, onSuccess) );
        },
    };
};

const RegistrationContainer = connect( mapStateToProps,
    mapDispatchToProps )( Registration );

export default RegistrationContainer;
