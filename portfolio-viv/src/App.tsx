import React from 'react';
import logo from './assets/images/viv_icon.svg';
import photo from './assets/images/pccover.jpg';
import blob1 from './assets/images/blob1.svg';
import blob2 from './assets/images/blob2.svg';
import blob3 from './assets/images/blob3.svg';
import './App.scss';

function App() {
	const projects = [
		{
			name: 'Mixed Messages',
			image: 'https://vivzzx.github.io/img/mixed-msg600.png',
			link: 'https://vivzzx.github.io/projects/mixed-msg/',
			description: 'That was a pair-programming project for CodeCademy. Blablablabal bla bla'
		},
		{
			name: 'Tribute Page',
			image: 'https://i.postimg.cc/br7sc0Rx/tribute600.png',
			link: 'https://vivzzx.github.io/projects/tribute_page/',
			description: 'That was a cool project to FreeCodeCamp'
		},
		{
			name: 'Customer Satisfaction Survey',
			image: 'https://i.postimg.cc/ZRNGsrCt/survey600.png',
			link: 'https://vivzzx.github.io/projects/survey_form/',
			description: 'Forms exercise'
		},
		{
			name: 'JS Documentation',
			image: 'https://i.postimg.cc/G2MyNsNK/js600.png',
			link: 'https://vivzzx.github.io/projects/technical_doc/',
			description: 'real documentation'
		},
		{
			name: 'Original Bags',
			image: 'https://i.postimg.cc/nrPqsQGr/product600.png',
			link: 'https://vivzzx.github.io/projects/product_landing/',
			description: 'original bags bla bla bla'
		},
		{
			name: 'What time is it?',
			image: 'https://vivzzx.github.io/img/bom-dia600.png',
			link: 'https://vivzzx.github.io/projects/bom_dia/',
			description: 'javascript training'
		}
	]
	return (
		<div className="App">
			<div className='container'>
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

							<h1>Hello, 
								<br />I am Viv 
								<br />a web developer</h1>
							<p>I'm a Front End Developer based in Germany</p>
							<div>
								<div className='button'>Contact Me Now</div>
							</div>
							<div className='blobsContainer'>
								<img src={blob1} className='blob1' alt='blobs!' />
								<img src={blob2} className='blob2' alt='blobs!' />
								<img src={blob3} className='blob3' alt='blobs!' />
							</div>
							
						
						{/*
						<div className='heroImg'>
							<div className=''>
								<img src={blob1} className='blob1' alt='blobs!' />					
								<img src={photo} alt='this is me' />	
							</div>
						</div>
						*/}
					</section>
					<section className='projects'>
						<h3>My Projects</h3>
						<div className='showProjects'>
							{
								projects.map((item, index) => {
									return (
										<div className='card' key={index}>
											<img src={item.image} alt={item.name} />
											<div className='cardOverlay'> 
												<svg className="cardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>  
												<p className='cardHeader'>{item.name}</p>
												<p className='cardDescription'>{item.description}</p>
											</div>
										</div>)
								})
							}
						</div>
					</section>
					<section  className='bg about'>
						<h3>Why me?</h3>
						<p>As a professional I am very commited, responsible and dedicated.</p>
						<div className='button'> Learn More </div>
					</section>
					<section>
						<h3>My Skills</h3>
					</section>
				</main>
				<footer>
					<h2>Contact Me</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Convallis vel suspendisse risus, egestas tempor.</p>
					<div className='button'>hello@viv.com</div>
				</footer>
			</div>
		</div>
		
	);
}

export default App;
