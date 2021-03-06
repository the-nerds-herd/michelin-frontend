import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import Update from './Update';

import '../../App.css';

const RestaurantID = ({ match }) => {
	const [restaurant, setRestaurant] = useState({});
	const [appear, setAppear] = useState('');
	const token = localStorage.getItem('token');
	const [error, setError] = useState('');

	const getData = () => {
		axios(`${APIurl}/${match.params.id}`)
			.then((res) => {
				setRestaurant(res.data);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getData();
	}, [match.params.id]);

	const handleDelete = (event) => {
		event.preventDefault();
		const id = event.target.attributes.class.nodeValue;
		axios({
			url: `${APIurl}/reviews/${id}`,
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then(() => {
				getData();
			})
			.catch(console.error);
	};

	const updating = (event) => {
		appear === ''
			? setAppear(event.target.attributes.class.nodeValue)
			: setAppear('');
		error === '' ? setError(true) : setError('');
	};

	if (!restaurant) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='restContainer'>
			<div className='restInform'>
				<div className='restDesc'>
					<h1>{restaurant.name}</h1>
					<div>
						{restaurant.starNumber === 3 && (
							<div>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
									alt='stars'
									width='3%'
								/>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
									alt='stars'
									width='3%'
								/>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
									alt='stars'
									width='3%'
								/>
							</div>
						)}

						{restaurant.starNumber === 2 && (
							<div>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
									alt='stars'
									width='3%'
								/>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
									alt='stars'
									width='3%'
								/>
							</div>
						)}

						{restaurant.starNumber === 1 && (
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
								alt='stars'
								width='3%'
							/>
						)}
					</div>

					<div className='restText'>
						<p>Introduction (from Michelin Guide)</p>
						<p>{restaurant.introduction}</p>
						<a href={restaurant.website}>{restaurant.website}</a>
						<p>Opening Hours: {restaurant.openingHours}</p>
						<p>
							<a href={restaurant.menue}>Menu</a>
						</p>
						<p>Phone: {restaurant.Phone}</p>
						<p>Address: {restaurant.address}</p>
					</div>
				</div>
				<div className='backLink'>
					<Link to={'/restaurants'}>
						<p>Other Michelin Stars</p>
					</Link>
				</div>
				<div className='reviewsContainer'>
					<div className='reviewForm'>
						<h3>Reviews</h3>
						{token ? (
							<Link
								to={`/restaurants/${restaurant._id}/${restaurant.name}/add-review`}
								className='reviewlink'>
								<p>Write A Review</p>
							</Link>
						) : (
							<Link to={'/user/login'}>
								<p>Please login to write a review.</p>
							</Link>
						)}
					</div>
					<div className='reviewsMessages'>
						{restaurant.reviews && restaurant.reviews.length ? (
							restaurant.reviews.map((review) => (
								<div className='reviewInformation'>
									<p>Reviewer: {review.owner.name}</p>
									<p>Rating: {review.rating}</p>
									<p>Review Title: {review.title}</p>
									<p>Review Content: {review.body}</p>
									<p>Review Updated at: {review.updatedAt.slice(0, 10)}</p>
									<button onClick={handleDelete} className={review._id}>
										Delete
									</button>
									<button onClick={updating} className={review._id}>
										Update
									</button>
									{appear.includes(review._id) &&
									review.owner.name == localStorage.getItem('username') ? (
										<Update match={match} review={review} getData={getData} />
									) : null}
									{appear.includes(review._id) &&
									error &&
									review.owner.name != localStorage.getItem('username') ? (
										<p>You are not the owner of this review.</p>
									) : null}
								</div>
							))
						) : (
							<div style={{ marginLeft: '1rem' }}>No Review yet.</div>
						)}
					</div>
				</div>
			</div>

			<div className='restPics'>
				<img src={restaurant.restaurantImg} alt='restaurant' />
				<img src={restaurant.dishImgOne} alt='dish one' />
				<img src={restaurant.dishImgTwo} alt='dish two' />
			</div>
		</div>
	);
};

export default RestaurantID;
