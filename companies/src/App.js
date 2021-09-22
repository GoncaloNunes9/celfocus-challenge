import React from 'react'
import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import Companies from './views/companies/index';
import { history } from './helpers/history';
import Numbers from './views/numbers/index';
import Company from './views/companies/show';
import NotFound from './views/404';

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Companies} />

          <Route exact path="/companies" component={Companies} />
          <Route path="/companies/:companyId" component={Company} />

          <Route exact path="/numbers/:numberID" component={Numbers} />

          <Route component={NotFound} />

        </Switch>
      </Router>
    )
  }
}

export default App;
