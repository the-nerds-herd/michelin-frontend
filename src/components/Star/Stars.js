import React from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../Restaurants/Restaurants';
// import MichelinOne from '../../../public/Images/Michelin1.png';
// import MichelinTwo from '../../../public/Images/Michelin2.png';
// import MichelinThree from '../../../public/Images/Michelin3.png';



const Stars = () => {

	return (
		<div>
			<Link to='/onestar'>
				{/* <img src={MichelinOne} alt="One Michelin Star"/> */}
				<h3>One Star</h3>
			</Link>
			<Link to='/twostars'>
				{/* <img src={MichelinTwo} alt="Two Michelin Stars"/> */}
				<h3>Two Stars</h3>
			</Link>
			<Link to='/threestars'>
				{/* <img src={MichelinThree} alt="Three Michelin Stars"/> */}
				<h3>Three Stars</h3>
			</Link>

			<Restaurant />
		</div>
	);
};

export default Stars;
