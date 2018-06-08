import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';

const VARIANT_URL = 'http://192.168.0.102:8082/api/variants/getVariant';
const VARIANT_SUBMIT_URL = 'http://192.168.0.102:8082/api/variants/check';

const generateFetchVariantUrl = ( testId ) => {
    return `${VARIANT_URL}?testId=${testId}`;
};

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

export const clearVariant = () => {
    return {
        type: types.VARIANT_CLEARED,
    };
};

export const submitVariant = (variant) => {
    return ( dispatch ) => {
        const data = serializeAnswers(variant);
        const onSuccess = ( response ) => {
            dispatch(setResult( response ));
        };

        const onError = ( error ) => {  
            debugger;
        };

        return FetchUtil.fetchWrapper( VARIANT_SUBMIT_URL, data,
            onSuccess, onError, null, null, 'POST' );
    };
};

export const setResult = ( result ) => {
    return {
        type: types.SET_RESULT,
        result: {...result},
    };
};

export const fetchVariant = (testId) => {
    return ( dispatch ) => {
        const fetchUrl = generateFetchVariantUrl(testId);
        const onSuccess = ( response ) => {
            const variant = deserializeVariant( response );
            dispatch(variantChanged( variant ));
        };

        const onError = ( error ) => {  
            debugger;
        };

        return FetchUtil.fetchWrapper( fetchUrl, null, onSuccess, onError );
    };
};

const deserializeVariant = ( response ) => {
    const result = {
        name: response.name,
        mark: response.mark,
        id: response.variantId,
        questions: response.questions,
    };
    // TODO : change deserialize when response will be changed
    return result;
};

const serializeAnswers = ( variant ) => {
    const answers = Object.keys( variant.answers ).map( (key) => {
        let answerIds;
        const answer = variant.answers[key];

        if ( Array.isArray( answer ) ) {
            answerIds = answer;
        }
        else if ( typeof answer === undefined ) {
            answerIds = [];
        } else if ( answer === '' ) {
            answerIds = [];
        } else {
            answerIds = [answer];
        }
        return {
            questionId: key,
            answerIds: answerIds,
        };
    } );

    const result = {
        variantId: variant.id,
        questionAnswers: answers,
    };
    return result;
};
