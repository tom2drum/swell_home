import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Lookbook from './pages/Lookbook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
				<Switch>
					<Route exact path="/" component={Lookbook} />
				</Switch>
      </div>
    );
  }
}

export default App;
