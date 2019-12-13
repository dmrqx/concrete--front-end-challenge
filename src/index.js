import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '@rosey/components/App'

const rootElement = document.getElementById('app')

render(
  <Router>
    <App />
  </Router>,
  rootElement
)
