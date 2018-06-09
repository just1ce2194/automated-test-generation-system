import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';
import constants from '../constants';

const studentRole = 'STUDENT';

const domain = constants.domain;
const CONTROL_TYPE = 'control';
const TRAINING_TYPE = 'training';

const TEST_LIST_URL = domain + '/tests';
const CONFIGS_URL = domain + '/configurations';

const STUDENTS_URL = domain + '/users?role=' + studentRole;
const TESTS_FOR_STUDENTS_URL = domain + '/tests?type=' + CONTROL_TYPE;


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

        const url = TEST_LIST_URL + `?type=${TRAINING_TYPE}`;
        
        return FetchUtil.fetchWrapper( url,
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

        const url = TEST_LIST_URL + `?type=${CONTROL_TYPE}`;

        return FetchUtil.fetchWrapper( url,
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

export const setTestForStudent = ( testId, studentId, onSuccess ) => {
    return ( dispatch ) => {
        const data = {
            testId: testId,
            userIds: [studentId],
        };

        return FetchUtil.fetchWrapper( TEST_LIST_URL,
            data, onSuccess, null, null, null, 'POST' );
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

export const fetchStudents = ( onSuccess ) => {
    return ( dispatch ) => {
        return FetchUtil.fetchWrapper( STUDENTS_URL,
            null, onSuccess );
    };
};

export const fetchTests = ( onSuccess ) => {
    return ( dispatch ) => {
        return FetchUtil.fetchWrapper( TESTS_FOR_STUDENTS_URL,
            null, onSuccess );
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

