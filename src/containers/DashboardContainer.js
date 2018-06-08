import {Dashboard} from '../components';
import {connect} from 'react-redux';

import * as DashboardActions from '../actions/DashboardActions';

const mapStateToProps = ( state ) => {
    return ( {
        trainingTests: state.dashboard.trainingTests,
        controlTests: state.dashboard.controlTests,
        userRole: state.visibleUser.role,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        fetchTrainingTests: () => {
            dispatch( DashboardActions.fetchTrainingTests() );
        },
        fetchControlTests: () => {
            dispatch( DashboardActions.fetchControlTests() );
        },
        uploadConfig: ( file, onSuccess, onError ) => {
            dispatch( DashboardActions.uploadConfig( file, onSuccess, onError ) );
        },
    };
};

const DashboardContainer = connect( mapStateToProps,
    mapDispatchToProps )( Dashboard );

export default DashboardContainer;
