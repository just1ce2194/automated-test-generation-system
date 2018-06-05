import {VARIANTS_LIST_CHANGED} from '../constants/ActionTypes';

const initialState = {
    variants: [],
};

const variantsList = ( state = initialState, action ) => {
    switch ( action.type ) {
        case VARIANTS_LIST_CHANGED:
            return Object.assign({}, state, {
                variants: action.variants,
            } );
        default:
            return state;
    }
};

export default variantsList;
