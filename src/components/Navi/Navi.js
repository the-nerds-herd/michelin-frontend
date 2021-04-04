import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavDropdownMenu } from 'react-bootstrap-submenu';

const Navi = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand='xs' variant='light' bg='back-color'>
				<Navbar.Toggle id='icon' aria-controls='responsive-navbar-nav' />
				<Navbar.Brand href='/'>
					<h2>Michelin Star Finder</h2>
				</Navbar.Brand>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Navbar.Collapse className='mr-auto'>
						<Nav.Link href='/'>
							<h4 className='link-text'>Home</h4>
						</Nav.Link>

						<NavDropdownMenu id='collasible-nav-dropdown' title='Restaurants'>
							<NavDropdown.Item href='/restaurants' className='link-text'>
								<h6>All Restaurants</h6>
							</NavDropdown.Item>
							<NavDropdown.Item href='/onestar' className='link-text'>
								<h6>One Star Restaurants</h6>
							</NavDropdown.Item>
							<NavDropdown.Item href='/twostars' className='link-text'>
								<h6>Two Star Restaurants</h6>
							</NavDropdown.Item>
							<NavDropdown.Item href='/threestars' className='link-text'>
								<h6>Three Star Restaurants</h6>
							</NavDropdown.Item>
						</NavDropdownMenu>
						<Nav.Link href='/about'>
							<h4 className='link-text'>About</h4>
						</Nav.Link>
						<Nav.Link href='/user/login'>
							<h4 className='link-text'>Sign up/ Log in</h4>
						</Nav.Link>
					</Navbar.Collapse>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navi;
