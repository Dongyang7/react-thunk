import React, { Component } from 'react';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import List from './List';

class App extends Component {
  render() {
    return <div>
      <Navigation />
      <div style={{'margin':'0 auto', width:'80%', marginTop:'10px'}}>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/create" component={Create} />
      </div>
    </div>
  }
}

export default App;
