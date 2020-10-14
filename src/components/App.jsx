import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import About from "./About";
import Tech from "./Tech";

import '../assets/style.css';

const RouteContainer = posed.div({
	exit: { opacity: 0 },
	enter: { opacity: 1, delay: 300, beforeChildren: true },
});


function App() {
	return (
		<Router>
			<Route render={({ location }) => (
				<div id="site-container">
					<div id="content-container">
						<PoseGroup>
							<RouteContainer key={location.key}>
								<Switch location={location}>
									<Route exact path="/" component={About} key="" />
									<Route path="/about" component={About} key="about" />
									<Route path="/tech" component={Tech} key="tech" />
								</Switch>
							</RouteContainer>
						</PoseGroup>
					</div>
					<div className="link" id="route">
						<Link to="/about" className="route">About</Link> • <Link to="/tech" className="route">Tech</Link>
					</div>
				</div>
			)} />
		</Router>
	);
}

export default App;
