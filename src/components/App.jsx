import React from 'react';
import '../assets/style.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import About from "./About";
import Tech from "./Tech";

function App() {
	return (
		<Router>
		<AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
		<div>
		<Switch>
		<Route exact path="/" component={About} >
		</Route>
		<Route path="/about" component={About} />
		<Route path="/tech" component={Tech} />
		</Switch>
		<div className="link" id="route">
		<Link to="/about" className="route">About</Link> • <Link to="/tech" className="route">Tech</Link>
		</div>
		</div>
		</AnimatedSwitch>
		</Router>
		);
}

export default App;
