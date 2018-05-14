import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LocalizedStrings from './LocalizedStrings';
import configureStore from './configureStore';
if (localStorage.getItem('lang')) {
  LocalizedStrings.setLanguage(localStorage.getItem('lang'));
} else {
  LocalizedStrings.setLanguage('en');
}

const store = configureStore();

render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
