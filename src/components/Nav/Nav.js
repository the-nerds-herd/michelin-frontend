import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<div className='nav'>
			<nav>
				<Link to='/' className='links'>
					Home
				</Link>
				<Link to='/stars' className='links'>
					Stars
				</Link>
				{/* <Link to='/sigin-and-login' className='links'>
					signin/login
				</Link> */}
				<Link to='/restaurants' className='links'>
					Restaurants
				</Link>
				<Link to='/about' className='links'>
					About
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
