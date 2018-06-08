import {Dashboard} from '../components';
import {connect} from 'react-redux';

import * as DashboardActions from '../actions/DashboardActions';

const mapStateToProps = ( state ) => {
    return ( {
        trainingTests: state.dashboard.trainingTests,
        controlTests: state.dashboard.controlTests,
        userRole: state.visibleUser.role,
        configs: state.dashboard.configs,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        fetchTrainingTests: () => {
            dispatch( DashboardActions.fetchTrainingTests() );
        },
        fetchConfigs: () => {
            dispatch( DashboardActions.fetchConfigs() );
        },
        fetchControlTests: () => {
            dispatch( DashboardActions.fetchControlTests() );
        },
        uploadConfig: ( file, onSuccess, onError ) => {
            dispatch( DashboardActions.uploadConfig( file, onSuccess, onError ) );
        },
        sendConfigForTestGeneration: ( configId, onSuccess ) => {
            dispatch( DashboardActions.sendConfigForTestGeneration( configId, onSuccess ) );
        },
    };
};

const DashboardContainer = connect( mapStateToProps,
    mapDispatchToProps )( Dashboard );

export default DashboardContainer;
