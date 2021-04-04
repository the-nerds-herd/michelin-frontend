import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIurl from '../../config';
import axios from 'axios';
import Grid from '../Container/Grid';
import Card from '../Container/Card';

const TwoStars = () => {
	const [twoStars, setTwoStars] = useState([]);

	useEffect(() => {
		axios(`${APIurl}`)
			.then((res) => setTwoStars(res.data))
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
			<Grid>
				{twoStars.map((restaurant) =>
					restaurant.starNumber === 2 ? (
						<div className='restLinks'>
							<Card>
								<Link
									to={`/restaurants/${restaurant._id}`}
									className='restlinktext'>
									<img
										src={restaurant.restaurantImg}
										alt='Two Stars Michelin Restaurant'
										className='restImg'
									/>
									<p>{restaurant.name}</p>
								</Link>
							</Card>
						</div>
					) : (
						''
					)
				)}
			</Grid>
		</div>
	);
};

export default TwoStars;
