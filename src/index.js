import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from "./Components/basic/Header";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-raeavulxht3m141b.us.auth0.com"
        clientId="4yTVzBUXCRRhLrCbyD7BW6W9ZXHvNImR"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        >
       {/* <React.StrictMode> */}
        <App />
       {/* </React.StrictMode> */}
       </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
