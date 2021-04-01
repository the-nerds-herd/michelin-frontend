// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantID from './components/RestaurantID/RestaurantID';
import Star from './components/Star/Stars';
import OneStar from './components/Star/OneStar';
import TwoStars from './components/Star/TwoStars';
import ThreeStars from './components/Star/ThreeStars';
import ReviewForm from './components/ReviewForm/ReviewForm';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>
					<img
						src='https://www.nicepng.com/png/full/81-812831_michelin-star-jpg.png'
						alt='stars'
						width='7%'
					/>
					Michelin Starts Finder
				</h1>
				<Nav />
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/restaurants' exact component={Restaurants} />
				<Route path='/stars' component={Star} />
				<Route path='/onestar' exact component={OneStar} />
				<Route path='/twostars' exact component={TwoStars} />
				<Route path='/threestars' exact component={ThreeStars} />
				<Route path='/restaurants/:id' exact component={RestaurantID} />
				<Route
					path='/restaurants/:id/:name/add-review'
					component={ReviewForm}
				/>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
