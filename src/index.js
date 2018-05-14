import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LocalizedStrings from './LocalizedStrings';

if (localStorage.getItem('lang')) {
  LocalizedStrings.setLanguage(localStorage.getItem('lang'));
} else {
  LocalizedStrings.setLanguage('en');
}

render(<App />, document.getElementById('root'));
registerServiceWorker();
