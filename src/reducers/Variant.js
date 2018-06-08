import {VARIANT_CHANGED, ANSWER_CHANGED, VARIANT_CLEARED, SET_RESULT} from '../constants/ActionTypes';

const initialState = {
    mark: 0,
    name: '',
    questions: [],
    id: null,
    answers: {},
    result: {},
};

const variant = ( state = initialState, action ) => {
    switch ( action.type ) {
        case VARIANT_CHANGED:
            return Object.assign({}, state, {
                mark: action.variant.mark,
                name: action.variant.name,
                id: action.variant.id,
                questions: action.variant.questions,
                answers: {},
                result: {},
            });
        case ANSWER_CHANGED:
            let answers = state.answers;
            answers[action.questionId] = action.answer;
            return Object.assign({}, state, {
                answers: answers,
            });
        case VARIANT_CLEARED:
            return initialState;
        case SET_RESULT:
            return Object.assign({}, state, {
                result: action.result,
            });
        default:
            return state;
    }
};

export default variant;
