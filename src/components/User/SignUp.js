import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';

function SignUp() {
	const initialState = { name: '', password: '' };
	const [formState, setFormState] = useState(initialState);
	const [user, setUser] = useState('');

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/users/signup`, formState)
			.then(() => {
				setUser(formState.name);
				setFormState(initialState);
				// history.push('/');
			})
			.catch(console.error);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Username:</label>
				<input
					id='name'
					type='text'
					onChange={handleChange}
					value={formState.name}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					id='password'
					type='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<button type='submit'>Sign Up</button>
			</form>
			{user ? (
				<p>
					Welcome {user}! Please login <Link to='/user/login'>here</Link>
				</p>
			) : (
				''
			)}
		</div>
	);
}
export default SignUp;
