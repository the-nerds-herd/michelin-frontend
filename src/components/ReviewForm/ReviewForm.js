import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReviewForm = ({ match }) => {
	const initialState = {
		title: '',
		body: '',
		reviewer: '',
		rating: '',
		restaurantId: `${match.params.id}`,
	};
	const history = useHistory();
	const [review, setReview] = useState({
		title: '',
		body: '',
		reviewer: '',
		rating: '',
		restaurantId: `${match.params.id}`,
	});

	const handleChange = (event) => {
		setReview({ ...review, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/reviews`, review)
			.then(() => {
				setReview(initialState);
				history.push(`/restaurants/${match.params.id}`);
			})
			.catch(console.error);
	};

	const handleClick = (event) => {
		event.preventDefault();
		history.push(`/restaurants/${match.params.id}`);
	};

	return (
		<div>
			<h4>
				Add your review for{' '}
				<span style={{ fontStyle: 'italic', color: 'brown' }}>
					{match.params.name}
				</span>
			</h4>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='reviewer'>
					<Form.Label>Reviewer</Form.Label>
					<Form.Control
						type='text'
						placeholder='your name'
						onChange={handleChange}
						value={review.reviewer}
						// require='true'
					/>
				</Form.Group>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='text'
						placeholder='title of your review'
						onChange={handleChange}
						value={review.title}
						// require='true'
					/>
				</Form.Group>
				<Form.Group controlId='rating'>
					<Form.Label>
						Select your rating (bigger number better rating).
					</Form.Label>
					<Form.Control
						as='select'
						onChange={handleChange}
						value={review.rating}>
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
						placeholder="What's your comment?"
						onChange={handleChange}
						value={review.body}
					/>
				</Form.Group>
				<Button variant='outline-primary' type='submit'>
					Submit
				</Button>
				<Button variant='outline-danger' onClick={handleClick}>
					Cancle
				</Button>
			</Form>
		</div>
	);
};

export default ReviewForm;
