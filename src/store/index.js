import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = ( preloadedState ) => {
    return compose( applyMiddleware( thunk ))( createStore )( rootReducer );
};

export default configureStore;
