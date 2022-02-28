import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { App } from './App';

ReactDOM.render(
  <Suspense fallback="">
    <RecoilRoot>
      <HashRouter>
        <App />
      </HashRouter>
    </RecoilRoot>
  </Suspense>,
  document.getElementById('root'),
);
