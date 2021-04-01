import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIurl from '../../config';
import axios from 'axios';

const OneStar = () => {
	const [oneStar, setOneStar] = useState([]);

	useEffect(() => {
		axios(`${APIurl}`)
			.then((res) => setOneStar(res.data))
			.catch(console.error);
	}, []);

	return (
		<div>
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
			</div>
				{oneStar.map((restaurant) =>
					restaurant.starNumber === 1 ? (
						<div className='oneStarContainer'>
							<Link to={`/restaurants/${restaurant._id}`}>
								<p>{restaurant.name}</p>
								<img
									src={restaurant.restaurantImg}
									alt='One Star Michelin Restaurant'
								/>
							</Link>
						</div>
					) : (
						<p></p>
					)
				)}
		</div>
	);
};

export default OneStar;
