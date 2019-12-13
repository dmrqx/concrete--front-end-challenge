import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ROUTES from '@rosey/routes'

export default function App () {
  return (
    <Switch>
      {ROUTES.map(({component: Component, key, ...props}) => (
          <Route key={key} component={Component} {...props} />
      ))}
    </Switch>
  )
}
