import { Container } from '@material-ui/core';
import React from 'react';
import {Nav, Navbar, Col, Image} from 'react-bootstrap'

import { WiStars } from 'react-icons/wi';


const Home = () => {
    return (
        <div>
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
              <Image className='michelin-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKK6ls_q00-jw2RHFKt--Eoun1zdiHU2eL0w&usqp=CAU" roundedCircle fluid />

      {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAc4PXk8yxyFkfF2saHjDNhQexJ4EvJ4yHW5UPIEHw-7ZemNAaaAQjLqFKv2lJ1_exDw&usqp=CAU" roundedCircle /> */}
 
            
            </div>

		);
};

export default Home;