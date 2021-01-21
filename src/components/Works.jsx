import React from 'react';
import Footer from './Footer.jsx';
import '../assets/works.css';

function Works() {
	return (
		<div className="container">
			<div className="heading">
				<h1>My Works</h1>
				Some beautiful websites I contributed to
			</div>
			<div className="myworks">
				<div className="row">
					<div className="col">
						<figure>
							<a href="https://corona.siakkab.go.id/">
								<img src={require('../images/works/corona.webp')} alt="https://corona.siakkab.go.id/"/>
								<figcaption><h3>Pusat Informasi & Koordinasi COVID-19</h3></figcaption>
							</a>
						</figure>
					</div>
					<div className="col">
						<figure>
							<a href="https://e-pusda.siakkab.go.id/">
								<img src={require('../images/works/epusda.webp')} alt="https://e-pusda.siakkab.go.id/"/>
								<figcaption><h3>Aplikasi e-Pustaka Siak</h3></figcaption>
							</a>
						</figure>
					</div>
					<div className="col">
						<figure>
							<a href="https://silau.siakkab.go.id/">
								<img src={require('../images/works/silau.webp')} alt="https://silau.siakkab.go.id/"/>
								<figcaption><h3>Portal Pembelajaran Siak Bedelau</h3></figcaption>
							</a>
						</figure>
					</div>
					<div className="col">
						<figure>
							<a href="https://sipeka.siakkab.go.id/">
								<img src={require('../images/works/sipeka.webp')} alt="https://sipeka.siakkab.go.id/"/>
								<figcaption><h3>Seksi Pengembangan Aplikasi dan TI, Diskominfo Siak</h3></figcaption>
							</a>
						</figure>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}
export default Works;
