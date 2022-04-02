import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// for React 18:

// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)

