import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TheamContextFunction from './Component/Theam';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TheamContextFunction>
    <App />
  </TheamContextFunction> 
);


