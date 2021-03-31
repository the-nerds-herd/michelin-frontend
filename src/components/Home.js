import React from 'react';
import {Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap'

import { WiStars } from 'react-icons/wi';


const Home = () => {
    return (
			<Navbar className='navbar' variant='dark'>
				<Navbar.Brand href='#home'>
					<WiStars className='star' />
				</Navbar.Brand>
				<Nav id='mr-auto'>
					<Nav.Link href='#home'>
						<h4 className='link-text'>Home</h4>
					</Nav.Link>
					<Nav.Link href='#features'>
						<h4 className='link-text'>Stars</h4>
					</Nav.Link>
					<Nav.Link href='#pricing'>
						<h4 className='link-text'>Resurants</h4>
					</Nav.Link>
				</Nav>
			</Navbar>
		);
};

export default Home;