import {TRAINING_TESTS_LIST_CHANGED, CONTROL_TESTS_LIST_CHANGED, CONFIGS_CHANGED} from '../constants/ActionTypes';

const initialState = {
    trainingTests: [],
    controlTests: [],
    configs: [],
};

const dashboard = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TRAINING_TESTS_LIST_CHANGED:
            return Object.assign({}, state, {
                trainingTests: action.tests,
            } );
        case CONTROL_TESTS_LIST_CHANGED:
            return Object.assign({}, state, {
                controlTests: action.tests,
            } );
        case CONFIGS_CHANGED:
            return Object.assign({}, state, {
                configs: action.configs,
            } );
        default:
            return state;
    }
};

export default dashboard;
