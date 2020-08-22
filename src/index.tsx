import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import { App } from '@/modules/App';
import { store } from './rdx/store';
import './index.css';

const myCache = createCache();
myCache.compat = true;

render(
  <Provider store={store}>
    <CacheProvider value={myCache}>
      <App />
    </CacheProvider>
  </Provider>,
  document.getElementById('app')
);
