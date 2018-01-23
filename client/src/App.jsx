import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Lookbook from './pages/Lookbook';
import About from './pages/About';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={Lookbook} />
					<Route path="/about" component={About} />
				</Switch>
			</div>
		);
	}
}

export default App;
