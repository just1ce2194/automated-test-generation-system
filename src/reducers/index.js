import {combineReducers} from 'redux';

import variantsList from './VariantsList';
import variant from './Variant';
import visibleUser from './VisibleUser';

const rootReducer = combineReducers({
    variantsList,
    variant,
    visibleUser,
});

export default rootReducer;

