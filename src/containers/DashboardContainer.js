import {Dashboard} from '../components';
import {connect} from 'react-redux';
import roles from '../constants/Roles';

import * as DashboardActions from '../actions/DashboardActions';
import * as AdminDashboardActions from '../actions/AdminDashboardActions';

const mapStateToProps = ( state ) => {
    const props = {};

    props.userRole = state.visibleUser.role;

    if ( state.visibleUser.role === roles.admin ) {
        props.users = state.adminDashboard.users;
    } else {
        props.trainingTests = state.dashboard.trainingTests;
        props.controlTests = state.dashboard.controlTests;
        props.configs = state.dashboard.configs;
    };

    return props;
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        fetchUsers: () => {
            dispatch( AdminDashboardActions.fetchUsers() );
        },
        updateUser: (user, onSuccess) => {
            dispatch( AdminDashboardActions.updateUser(user, onSuccess ) );
        },
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
        fetchStudents: ( onSuccess ) => {
            dispatch( DashboardActions.fetchStudents(onSuccess) );
        },
        fetchTestsForStudents: ( onSuccess ) => {
            dispatch( DashboardActions.fetchTests(onSuccess) );
        },
        setTestForStudent: ( testId, studentId, onSuccess ) => {
            dispatch( DashboardActions.setTestForStudent(testId, studentId, onSuccess) );
        },
    };
};

const DashboardContainer = connect( mapStateToProps,
    mapDispatchToProps )( Dashboard );

export default DashboardContainer;
