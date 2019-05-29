import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<TodoApp />, rootElement);
}
