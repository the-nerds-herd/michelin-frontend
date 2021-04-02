import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'

const Navi = () => {
    return (
			<div>
				<Navbar collapseOnSelect expand='xs' variant='light' bg='back-color'>
					<Navbar.Toggle id='icon' aria-controls='responsive-navbar-nav' />
					<Navbar.Brand href='/'>
						<h2>Michelin Star Finder</h2>
					</Navbar.Brand>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>
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
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
};

export default Navi;