import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import testQuestions from './store/reducers/testQuestions';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({ 
  testQuestions: testQuestions,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
