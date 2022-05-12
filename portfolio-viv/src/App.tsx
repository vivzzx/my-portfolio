import React from 'react';
import logo from './assets/images/viv_icon.svg';
import photo from './assets/images/pccover.jpg'
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className='container bg'>
				<header>
					<div className='logoNav'>
						<img src={logo} alt='Logo' />
						<h2>Viv Galati</h2>
					</div>
				<nav>
					<ul>
						<li><a href="#"> Home </a></li>
						<li><a href="#"> Projects </a></li>
						<li><a href="#"> Contact Me </a></li>
						<li><a href="#"> About Me </a></li>
					</ul>
				</nav>
				</header>
				<main>
					<section className='hero'>
						<div className='heroTxt'>
							<h1>Hello, 
								<br />I am Viv 
								<br />a web developer</h1>
							<p>I'm a Front End Developer based in Germany</p>
							<div className='button amimate-button'>Contact Me Now</div>
						</div>
						<div className='heroImg'>
							<img src={photo} alt='this is me' />	
						</div>
					</section>
					<section className='projects'>
						<h3>My Projects</h3>
					</section>
						
					<div>
						
					</div>
				</main>
				<footer></footer>
			</div>
		</div>
		
	);
}

export default App;
