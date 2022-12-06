import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UiContextProvider } from './context/uiContext';
import { UserContextProvider } from './context/userContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
