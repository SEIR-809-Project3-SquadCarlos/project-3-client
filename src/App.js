import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';
import Category from './components/Category/Category'

function App() {
	return (
		<div className='app'>
			<header>
				<Navbar />
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route path='/attractions/:id' component={Detail} />
				<Route path='/create' component={Create} />
			</main>
		</div>
	);
}

export default App;
