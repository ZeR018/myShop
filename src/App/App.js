import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../components/Shop';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import axios from 'axios';
import setProducts from '../store/actions/products';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const dbLink = 'http://localhost:3000/db.json';

// const App = () => {
// 	const [products, setProduct] = useState([]);

// 	useEffect(() => {
// 		axios.get(dbLink).then(({ data }) => setProduct(data.products));
// 	}, []);
// 	return (
// 		<div className={styles.App}>
// 			<Header />

// 			<div>
// 				<Route path='/home' render={() => <Home products={products} />} />
// 				<Route path='/cart' render={() => <Cart />} />
// 				<Redirect from='/' to='/home/all' />
// 			</div>

// 			<Footer />
// 		</div>
// 	);
// };

class App extends React.Component {
	//	componentDidMount() {
	//		axios.get(dbLink).then(({ data }) => this.props.setProducts(data.products));
	//	}
	render() {
		return (
			<div className={styles.App}>
				<Header />

				<div>
					<Route path='/shop' component={Shop} />
					<Route path='/cart' component={Cart} />
					<Redirect from='/' to='/shop/all' />
				</div>

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products.items,
	};
};

const mapDispatchToProps = {
	setProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
