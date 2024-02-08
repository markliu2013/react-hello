// https://stackoverflow.com/questions/41897420/typescript-and-reactdom-render-method-doesnt-accept-component
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.scss';

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));
