import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Compoents/App';
import "./index.css";
import { StateProvider } from './Compoents/Context/StateProvider';
import { initialState } from './Compoents/Context/Reducer';
import reducer from './Compoents/Context/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
);
