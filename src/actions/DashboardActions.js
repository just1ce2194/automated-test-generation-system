import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';
import constants from '../constants';

const domain = constants.domain;

const TRAINING_TESTS_LIST_URL = domain + '/api/tests/training';
const CONTROL_TESTS_LIST_URL = domain + '/api/tests/control';
const CONFIGS_URL = domain + '/api/configurations';

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

export const configsChanged = ( configs ) => {
    return {
        type: types.CONFIGS_CHANGED,
        configs: configs,
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

export const fetchConfigs = () => {
    return ( dispatch ) => {
        const onSuccess = ( response ) => {
            const configs = deserializeConfigs( response );
            dispatch(configsChanged( configs ));
        };

        return FetchUtil.fetchWrapper( CONFIGS_URL,
            null, onSuccess );
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
        const onSuccess1 = ( response ) => {
            onSuccess();
        };

        const onError1 = ( response ) => {
            onError();
        };
        return FetchUtil.uploadFile( CONFIGS_URL,
            file, onSuccess1, onError1 );
    };
};

export const sendConfigForTestGeneration = ( configId, onSuccess ) => {
    return ( dispatch ) => {
        const onSuccess1 = ( response ) => {
            onSuccess();
        };

        const url = CONFIGS_URL + '?id=' + configId;

        return FetchUtil.fetchWrapper( url,
            null, onSuccess1, null, null, null, 'PUT' );
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

const deserializeConfigs = ( response ) => {
    return response;
};

