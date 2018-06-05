import {VARIANT_CHANGED, ANSWER_CHANGED} from '../constants/ActionTypes';

const initialState = {
    mark: 0,
    name: '',
    preamble: '',
    questions: [],
    answers: {},
};

const variant = ( state = initialState, action ) => {
    switch ( action.type ) {
        case VARIANT_CHANGED:
            return Object.assign({}, state, {
                mark: action.variant.mark,
                name: action.variant.name,
                preamble: action.variant.preamble,
                questions: action.variant.questions,
                answers: {},
            });
        case ANSWER_CHANGED:
            let answers = state.answers;
            answers[action.questionId] = action.answer;
            return Object.assign({}, state, {
                answers: answers,
            });
        default:
            return state;
    }
};

export default variant;
