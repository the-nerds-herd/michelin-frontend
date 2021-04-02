import React from 'react';
import { Image } from 'react-bootstrap';
import '../../App.css'

const Home = () => {
	return (
		<div className='home'>
			<Image
				className='michelin-pic'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHM2mSSKXq1K7N3p7cqXldDh3kGPda-nY-FdRA1kmlA6d9G12mD3AV0_-YXvrS-8al_0&usqp=CAU'
				roundedCircle
			/>
		</div>
	);
};

export default Home;
