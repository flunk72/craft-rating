import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, ForumPage } from '../Pages';

import './App.css'
// switch - делает так чтоб срабатывал только 1 внутренний роут
// exact - срабатывает только при точном совпадении с прям слешем 
const App = () => {
  
  return (
    <Switch>
      <Route path='/'
        component={MainPage}
        exact
      />
      <Route path='/forum'
        component={ForumPage}
      />
    </Switch>
  )
}

export default App;