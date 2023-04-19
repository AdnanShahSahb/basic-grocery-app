import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextParent } from "./ContextApi"
import { BrowserRouter } from 'react-router-dom';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextParent >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ContextParent>
);

