import {combineReducers} from 'redux';

import dashboard from './Dashboard';
import variant from './Variant';
import visibleUser from './VisibleUser';

const rootReducer = combineReducers({
    dashboard,
    variant,
    visibleUser,
});

export default rootReducer;

