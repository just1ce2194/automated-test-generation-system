import {TRAINING_TESTS_LIST_CHANGED, CONTROL_TESTS_LIST_CHANGED} from '../constants/ActionTypes';

const initialState = {
    trainingTests: [],
    controlTests: [],
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
        default:
            return state;
    }
};

export default dashboard;
