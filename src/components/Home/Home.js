import React from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { WiStars } from 'react-icons/wi';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Container  className='center' fluid>
			<Navbar  className='navbar' fixed="bottom" variant='dark'>
				<Navbar.Brand href='#home'>
					{/* <WiStars className='star' /> */}
				</Navbar.Brand>
				<Nav className='mx-auto'>
					<Nav.Link href='/'>
						<h4 className='link-text'>Home</h4>
					</Nav.Link>
					<Nav.Link href='/restaurants'>
						<h4 className='link-text'>Resturants</h4>
					</Nav.Link>
					<Nav.Link href='/about'>
						<h4 className='link-text'>About</h4>
					</Nav.Link>
					<Nav.Link href='/restaurants/add-review'>
						<h4 className='link-text'>Reviews</h4>
					</Nav.Link>
				</Nav>
			</Navbar>
			
				</Container>
			<h1	 class='title'>Michelin Star Finder</h1>

			<Image
				className='michelin-pic'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHM2mSSKXq1K7N3p7cqXldDh3kGPda-nY-FdRA1kmlA6d9G12mD3AV0_-YXvrS-8al_0&usqp=CAU'
				roundedCircle
				
			/>
				
			{/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAc4PXk8yxyFkfF2saHjDNhQexJ4EvJ4yHW5UPIEHw-7ZemNAaaAQjLqFKv2lJ1_exDw&usqp=CAU" roundedCircle /> */}
		</div>
	);
};

export default Home;
