import React from 'react';
import '../assets/style.css';

function About() {
	return (
		<div className="about">
			<h2>Fuad Agil<br /><span>Web Developer</span></h2><br />
			<p>I'm currently looking for collaboration on friendly neighborhood tech idea. Years of experience in web development especially PHP and JS with highly reusable and clean written code. Willing for remote or onsite(Pekanbaru) project.</p>
			<p> <i className="fa fa-fw fa-map-marker-alt">&nbsp;</i> Pekanbaru, ID</p><br />
			<div className="social">
				<a href="https://github.com/far1023" target="_blank" rel="noopener noreferrer" title="Fork me"><i className="fab fa-fw fa-github" /></a>&nbsp;
				<a href="https://twitter.com/fuadagil" target="_blank" rel="noopener noreferrer" title="Follow me"><i className="fab fa-fw fa-twitter" /></a>&nbsp;
				<a href="https://linkedin.com/in/fuadagilr" target="_blank" rel="noopener noreferrer" title="Add Connection"><i className="fab fa-fw fa-linkedin-in" /></a>&nbsp;
				<a href="mailto: contact@fuadagil.com" target="_blank" rel="noopener noreferrer" title="Send email"><i className="fa fa-fw fa-envelope" /></a>
			</div>
		</div>
	);
}
export default About;
