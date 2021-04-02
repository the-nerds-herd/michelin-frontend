import React from 'react';
import Jordan from './images/Jordan.jpg';
import Dianna from './images/Dianna.jpg';
import Jingjing from './images/Jingjing.jpg';
import Andrew from './images/Andrew.jpg';

const About = () => {
	return (
		<div>
			<h1>Meet the brains</h1>
			<h3>
				This application was created by a team of students at General Assembly
				during their project for unit 3. <br></br> The Michelin Star Finder is
				built using React.js with Boostrap and Flexbox. It uses a custom API
				built from Node.js with Express.js, and a database with MongoDB Atlas.
			</h3>
			<div className='container'>
				<div className='engineers'>
					<img src={Jordan} alt='Engineer Jordan' />
					<h2>Jordan Wilkes</h2>
					<h3>
						<a href='www.linkedin.com/in/JordanWilkes443'>LinkedIn</a>
					</h3>
					<h3>
						<a href='https://github.com/Jawilkes232'>GitHub</a>
					</h3>
				</div>
				<div className='engineers'>
					<img src={Dianna} alt='Engineer Dianna' />
					<h2>Dianna Nguyen</h2>
					<h3>
						<a href='https://www.linkedin.com/in/diannavnguyen/'>LinkedIn</a>
					</h3>
					<h3>
						<a href='https://github.com/DiannaNguyen'>GitHub</a>
					</h3>
				</div>
				<div className='engineers'>
					<img src={Jingjing} alt='Engineer Jingjing' />
					<h2>Jingjing Li</h2>
					<h3>
						<a href='https://www.linkedin.com/in/jingjinglisoftware/'>
							LinkedIn
						</a>
					</h3>
					<h3>
						<a href='https://github.com/jjcrab'>GitHub</a>
					</h3>
				</div>
				<div className='engineers'>
					<img src={Andrew} alt='Engineer Andrew' />
					<h2>Andrew Childre</h2>
					<h3>
						<a href='https://github.com/DiannaNguyen'>LinkedIn</a>
					</h3>
					<h3>
						<a href='https://github.com/DiannaNguyen'>GitHub</a>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default About;
