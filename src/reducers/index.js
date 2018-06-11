import {combineReducers} from 'redux';

import dashboard from './Dashboard';
import variant from './Variant';
import visibleUser from './VisibleUser';
import adminDashboard from './AdminDashboard';

const rootReducer = combineReducers({
    dashboard,
    variant,
    visibleUser,
    adminDashboard,
});

export default rootReducer;

