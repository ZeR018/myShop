import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../components/Shop';
import Footer from '../components/Footer';
import store from '../store/store';
import { useEffect, useState } from 'react';
import Cart from '../components/Cart';

const dbLink = 'http://localhost:3000/db.json';

const App = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		fetch(dbLink)
			.then((response) => response.json())
			.then((json) => setProduct(json.products));
	}, []);
	console.log(products);
	return (
		<div className={styles.App}>
			<Header />
			<Shop />
			<Footer />
			<Cart />
			{products.map((item) => (
				<div className={styles.products}>
					<img src={item.photo} />
					<p>{item.name}</p>
					{item.cost}
				</div>
			))}
		</div>
	);
};

export default App;
