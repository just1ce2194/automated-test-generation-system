import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import {VariantsListPage, VariantPage, LoginPage} from './pages';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './styles.scss';

const {Component} = React;

const store = configureStore();
const MOUNT_NODE = document.getElementById('root');

// ------------------------------------
// Create routes
// ------------------------------------
const routes = (
    <div>
        <Route exact path='/' component={VariantsListPage} />
        <Route path='/variant' component={VariantPage} />
        <Route path='/login' component={LoginPage} />
    </div>
);

class AppRoot extends Component {
  render() {
      return (
          <Provider store={store}>
            <BrowserRouter>
                  {routes}
            </BrowserRouter>
      </Provider>
      );
  }
}

let render = () => {
  ReactDOM.render(
    <AppRoot/>,
    MOUNT_NODE )
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render();
