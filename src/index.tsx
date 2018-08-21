import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './containers/index';
import StatefulHello from './components/StatefulHello';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Hello />
    </Provider>
    <StatefulHello name="TypeScript" enthusiasmLevel={2} />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
