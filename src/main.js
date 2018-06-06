import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import {DashboardPage, VariantPage, LoginPage} from './pages';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './styles.scss';
import LoginControl from 'LoginControl';

const {Component} = React;

const store = configureStore();
const MOUNT_NODE = document.getElementById('root');

// ------------------------------------
// Create routes
// ------------------------------------
const routes = (
    <LoginControl>
        <Route exact path='/' component={DashboardPage} />
        <Route path='/variant/:id' component={VariantPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/login' component={LoginPage} />
    </LoginControl>
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
