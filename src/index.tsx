import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import StatefulHello from './components/StatefulHello';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Hello name="TypeScript" enthusiasmLevel={2} />
    <StatefulHello name="TypeScript" enthusiasmLevel={2} />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
