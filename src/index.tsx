import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { App } from './App';

ReactDOM.render(
  <Suspense fallback="">
    <RecoilRoot>
      <BrowserRouter basename="react">
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
  document.getElementById('root'),
);
