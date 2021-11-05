import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from '../src/screens/login/LoginPage'
import MainScreen from './screens/MainScreen'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainScreen} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
