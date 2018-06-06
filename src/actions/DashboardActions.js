import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';

const VARIANTS_LIST_URL = 'http://192.168.0.102:8080/automated_test_generation/configList';

export const variantsListChanged = ( variants ) => {
    return {
        type: types.VARIANTS_LIST_CHANGED,
        variants: variants,
    };
};

export const fetchVariants = () => {
    return ( dispatch ) => {
        const onSuccess = ( response ) => {
            const variants = deserializeVariants( response );
            dispatch(variantsListChanged( variants ));
        };

        const onError = ( error ) =>
        {
            debugger;
        };

        return FetchUtil.fetchWrapper( VARIANTS_LIST_URL,
            null, onSuccess, onError );
    };
};

const deserializeVariants = ( response ) => {
    // TODO : change deserialize when response will be changed
    return response;
};
