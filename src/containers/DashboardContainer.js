import {Dashboard} from '../components';
import {connect} from 'react-redux';

import * as DashboardActions from '../actions/DashboardActions';

const mapStateToProps = ( state ) => {
    return ( {
        trainingTests: state.dashboard.trainingTests,
        controlTests: state.dashboard.controlTests,
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
    };
};

const DashboardContainer = connect( mapStateToProps,
    mapDispatchToProps )( Dashboard );

export default DashboardContainer;
