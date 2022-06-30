import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Compoents/App';
import "./index.css";
import { MyStateProvider } from './Compoents/Context/MyStateProvider';
import { initialState } from './Compoents/Context/Reducer';
import reducer from './Compoents/Context/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyStateProvider initialState={initialState} reducer={reducer}>
        <App />
    </MyStateProvider>
);
