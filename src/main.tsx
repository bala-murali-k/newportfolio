import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleProvider } from '@context/global/style-context';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleProvider>
        <App />
      </StyleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
