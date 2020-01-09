import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Redux & Store
import { Provider } from 'react-redux';
import store from './utils/store';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

const AppWithProvider = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));