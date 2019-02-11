require('offline-plugin/runtime').install();

import './index.html';
import './index.css';

import scripts from './scripts/scripts'

;(function() {
  // execute here
  scripts()
})();
