// filepath: c:\Users\Prashant Rana\Desktop\New folder\query-dashboard\src\index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App'; // Import the App component
import rootReducer from './redux/reducers'; // Ensure this path is correct
import './index.css'; // Optional: Add global styles if needed

// Create the Redux store
const store = createStore(rootReducer);

// Get the root DOM element
const rootElement = document.getElementById('root');

// Render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);