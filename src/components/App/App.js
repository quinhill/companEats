import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../../containers/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
