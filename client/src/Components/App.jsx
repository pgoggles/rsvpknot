import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NavBar from './SubComponents/NavBar.jsx';
import Home from './SubComponents/Home.jsx';
import Account from './SubComponents/Account.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/account" component={Account}></Route>
      </Router>
    );
  }
}

export default App;
