// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navi from './components/Navi/Navi'
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantID from './components/RestaurantID/RestaurantID';
import Star from './components/Star/Stars';
import OneStar from './components/Star/OneStar';
import TwoStars from './components/Star/TwoStars';
import ThreeStars from './components/Star/ThreeStars';
import ReviewForm from './components/ReviewForm/ReviewForm';
import About from './components/About'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
			</header>
			<main>
				<Navi />
				<Route path='/' exact component={Home} />
				{/* <Route path='/restaurants' exact component={Restaurants} /> */}
				<Route path='/about' exact component={About}/>
				<Route path='/restaurants' exact component={Star} />
				<Route path='/onestar' exact component={OneStar} />
				<Route path='/twostars' exact component={TwoStars} />
				<Route path='/threestars' exact component={ThreeStars} />
				<Route path='/restaurants/:id' exact component={RestaurantID} />
				<Route
					path='/restaurants/:id/:name/add-review'
					component={ReviewForm}
				/>
			</main>
			<footer>
				<Footer />
			</footer>

		</div>
	);
}

export default App;
