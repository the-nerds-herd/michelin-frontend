import React, { useState } from 'react';
import axios from 'axios';
import APIurl from '../../config';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Update = ({ match, review, getData }) => {
	const [reviews, setReviews] = useState({
		title: '',
		body: '',
		reviewer: '',
		rating: '',
		restaurantId: `${match.params.id}`,
	});

	const handleUpdate = (event) => {
		event.preventDefault();
		const id = review._id;
		axios
			.put(`${APIurl}/reviews/${id}`, reviews)
			.then(() => {
				getData();
			})
			.catch(console.error);
	};
	const handleChange = (event) => {
		setReviews({ ...reviews, [event.target.id]: event.target.value });
	};

	return (
		<div className={review._id}>
			<div>
				<h4>
					Update Review{' '}
					<span style={{ fontStyle: 'italic', color: 'brown' }}>
						{match.params.name}
					</span>
				</h4>
				<Form onSubmit={handleUpdate}>
					<Form.Group controlId='reviewer'>
						<Form.Label>Reviewer</Form.Label>
						<Form.Control
							type='text'
							placeholder={review.reviewer}
							onChange={handleChange}
							value={reviews.reviewer}
						/>
					</Form.Group>
					<Form.Group controlId='title'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type='text'
							placeholder={review.title}
							onChange={handleChange}
							value={reviews.title}
						/>
					</Form.Group>
					<Form.Group controlId='rating'>
						<Form.Label>
							Select your rating (bigger number better rating).
						</Form.Label>
						<Form.Control
							as='select'
							onChange={handleChange}
							value={reviews.rating}>
							<option></option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='body'>
						<Form.Label>Review Content</Form.Label>
						<Form.Control
							as='textarea'
							rows={8}
							placeholder={review.body}
							onChange={handleChange}
							value={reviews.body}
						/>
					</Form.Group>
					<Button variant='outline-primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Update;
