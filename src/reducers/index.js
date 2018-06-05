import {combineReducers} from 'redux';

import variantsList from './VariantsList';
import variant from './Variant';

const rootReducer = combineReducers({
    variantsList,
    variant,
});

export default rootReducer;

