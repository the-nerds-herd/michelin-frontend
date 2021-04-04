import React from 'react';
import Jordan from './images/Jordan.jpg';
import Dianna from './images/Dianna.jpg';
import Jingjing from './images/Jingjing.jpg';
import Andrew from './images/Andrew.jpg';
import { Card, CardDeck } from 'react-bootstrap';
const About = () => {
	return (

		<div className='about'>
			<h1>Meet the brains:</h1>
			<h3>
				This application was created by a team of students at General Assembly
				during their project for Unit 3. <br></br> <br></br> The Michelin Star
				Finder is built using React.js with Boostrap and Flexbox. It uses a
				custom API built from Node.js with Express.js, and a database with
				MongoDB Atlas.
	
			</h3>
			<br/>
			<CardDeck>
				<Card>
					<Card.Img variant='top' src={Jordan} />
					<Card.Body>
						<Card.Title>Jordan Wikles</Card.Title>
						<Card.Link href='https://www.linkedin.com/in/JordanWilkes443'>
							LinkedIn
						</Card.Link>
						<Card.Link href='https://github.com/Jawilkes232'>GitHub</Card.Link>
					</Card.Body>
				</Card>

				<Card>
					<Card.Img variant='top' src={Dianna} />
					<Card.Body>
						<Card.Title>Dianna Nguyen</Card.Title>
						<Card.Link href='https://www.linkedin.com/in/diannavnguyen'>
							LinkedIn
						</Card.Link>
						<Card.Link href='https://github.com/DiannaNguyen'>GitHub</Card.Link>
					</Card.Body>
				</Card>

				<Card>
					<Card.Img variant='top' src={Jingjing} />
					<Card.Body>
						<Card.Title>Jingjing Li</Card.Title>
						<Card.Link href='https://www.linkedin.com/in/jingjinglisoftware'>
							LinkedIn
						</Card.Link>
						<Card.Link href='https://github.com/jjcrab'>GitHub</Card.Link>
					</Card.Body>
				</Card>

				<Card>
					<Card.Img variant='top' src={Andrew} />
					<Card.Body>
						<Card.Title>Andrew Childre</Card.Title>
						<Card.Link href='https://www.linkedin.com/in/andrew-childre'>
							LinkedIn
						</Card.Link>
						<Card.Link href='https://github.com/AndrewChildre'>
							GitHub
						</Card.Link>
					</Card.Body>
				</Card>
			</CardDeck>
			{/* ================================== */}
		</div>
	);
};

export default About;
