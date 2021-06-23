import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './SubComponents/Home.jsx';
import Account from './SubComponents/Account.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/account" component={Account}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
