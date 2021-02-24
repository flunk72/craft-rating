import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import { MainPage, ForumPage } from '../Pages';


import './App.css'
// switch - делает так чтоб срабатывал только 1 внутренний роут
// exact - срабатывает только при точном совпадении с прям слешем 
const App = () => {
  return (
    <main role="main" className="container">
      <Header/>
      <Switch>
        <Route
          path="/"
          component={MainPage}
          exact />

        <Route
          path="/forum"
          component={ForumPage}
          />
      </Switch>
    </main>
  );
};

export default App;