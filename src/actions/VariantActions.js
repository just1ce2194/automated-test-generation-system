import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';

const VARIANT_URL = 'http://192.168.0.102:8080/automated_test_generation/variant';

export const variantChanged = ( variant ) => {
    return {
        type: types.VARIANT_CHANGED,
        variant: variant,
    };
};

export const answerChanged = ( questionId, answer ) => {
    return {
        type: types.ANSWER_CHANGED,
        questionId: questionId,
        answer: answer,
    };
};

export const fetchVariant = () => {
    return ( dispatch ) => {
        const onSuccess = ( response ) => {
            const variant = deserializeVariant( response );
            dispatch(variantChanged( variant ));
        };

        const onError = ( error ) =>
        {
            debugger;
        };

        return FetchUtil.fetchWrapper( VARIANT_URL, null, onSuccess, onError );
    };
};

const deserializeVariant = ( response ) => {
    const result = {
        name: response.name,
        mark: response.mark,
        preamble: response.preamble,
        questions: response.questionList,
    };
    // TODO : change deserialize when response will be changed
    return result;
};
