import React from 'react';
import '../assets/style.css';

function About() {
	return (
		<div className="about">
		<h2>Fuad Agil<br /><span>Web Developer</span></h2><br />
		<p>Years of experience in web development especially PHP and JS. Highly reusable and clean written code. Willing for remote or onsite(Pekanbaru) project.</p>
		<p> <i className="fa fa-fw fa-map-marker-alt">&nbsp;</i> Pekanbaru, ID</p><br />
		<div className="social">
		<a href="https://github.com/far1023" target="_blank" title="Fork me"><i className="fab fa-fw fa-github" /></a>&nbsp;
		<a href="https://twitter.com/fuadagil" target="_blank" title="Follow me"><i className="fab fa-fw fa-twitter" /></a>&nbsp;
		<a href="https://linkedin.com/in/fuadagilr" target="_blank" title="Add Connection"><i className="fab fa-fw fa-linkedin-in" /></a>&nbsp;
		<a href="mailto: fuadagilr@gmail.com" target="_blank" title="Send email"><i className="fa fa-fw fa-envelope" /></a>
		</div>
		</div>
		);
}
export default About;
