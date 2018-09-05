import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import { fetchTodos } from './api';

import './index.css';

fetchTodos('all').then(todos => {
  console.log(todos);
});

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
