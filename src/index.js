require('offline-plugin/runtime').install()

// import $ from 'jquery'

import './index.html'
import './index.css'

import scripts from './scripts/components/script'

;(function () {
  // execute here
  scripts()
})()
