import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Footer from '../components/Footer';

import { fetchWeather } from '../store/actions/weather';

const App = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchWeather());
	}, []);

	return (
		<div className={styles.App}>
			<Header />

			<div>
				<Switch>
					<Route path='/shop' component={Shop} />
					<Route path='/cart' component={Cart} />
					<Redirect from='/' to='/shop/all' />
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

export default App;
