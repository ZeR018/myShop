import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Footer from '../components/Footer';

import { fetchWeather } from '../store/actions/weather';

// http://localhost:3000/db.json
//const dbLink = 'http://localhost:3000/db.json';

// ссылка для Апи через выбранный город http://api.openweathermap.org/data/2.5/weather?q=${selectedCity},ru&appid=${weatherAPIKey}

// URL значка погоды `http://openweathermap.org/img/wn/${iconCode}@2x.png`

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
