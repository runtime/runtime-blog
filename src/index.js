import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {createRoot} from "react-dom/client";


// ReactDOM.render(
//     <App />, document.querySelector('#root')
// )

// First, we create a root
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Initial render. Container is implicitly accessed.
root.render(<App name="Runtime Blog" />);

// Subsequent renders. Container is implicitly accessed.
root.render(<App name="Runtime Blog!" />);