// import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home'
import Restaurants from './components/Restaurants/Restaurants';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Home />
				
				{/* <Nav /> */}
			</header>
			<main>
				{/* <Route path='/' component={Restaurants} /> */}
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
