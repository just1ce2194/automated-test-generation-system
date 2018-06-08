import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';

const TRAINING_TESTS_LIST_URL = 'http://192.168.0.102:8082/api/tests/training';
const CONTROL_TESTS_LIST_URL = 'http://192.168.0.102:8082/api/tests/control';
const UPLOAD_CONFIG_URL = 'http://192.168.0.102:8082/api/tests/control';

export const trainingTestsListChanged = ( tests ) => {
    return {
        type: types.TRAINING_TESTS_LIST_CHANGED,
        tests: tests,
    };
};

export const controlTestsListChanged = ( tests ) => {
    return {
        type: types.CONTROL_TESTS_LIST_CHANGED,
        tests: tests,
    };
};

export const fetchTrainingTests = () => {
    return ( dispatch ) => {
        const onSuccess = ( response ) => {
            const tests = deserializeTrainigTests( response );
            dispatch(trainingTestsListChanged( tests ));
        };

        return FetchUtil.fetchWrapper( TRAINING_TESTS_LIST_URL,
            null, onSuccess, null );
    };
};

export const fetchControlTests = () => {
    return ( dispatch ) => {
        const onSuccess = ( response ) => {
            const tests = deserializeControlTests( response );
            dispatch(controlTestsListChanged( tests ));
        };

        return FetchUtil.fetchWrapper( CONTROL_TESTS_LIST_URL,
            null, onSuccess, null );
    };
};

export const uploadConfig = ( file, onSuccess, onError ) => {
    return ( dispatch ) => {
        debugger;
        return FetchUtil.uploadFile( UPLOAD_CONFIG_URL,
            file, onSuccess, onError );
    };
};


const deserializeTrainigTests = ( response ) => {
    return response.map( ( test ) => {
        return {
            testId: test.testId,
            testName: test.testName,
        };
    });
};

const deserializeControlTests = ( response ) => {
    return response.map( ( test ) => {
        return {
            testId: test.testId,
            testName: test.testName,
        };
    });
};
