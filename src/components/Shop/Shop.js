import styles from './Shop.module.css';
import Category from '../Category';
import { Route, Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

const Shop = ({ products }) => {
	let hats = [],
		jackets = [],
		scarfs = [],
		sweaters = [];
	products.forEach((element) => {
		switch (element.category) {
			case 'HAT':
				hats.splice(1, 0, element);
				break;
			case 'JACKET':
				jackets.splice(1, 0, element);
				break;
			case 'SWEATER':
				sweaters.splice(1, 0, element);
				break;
			case 'SCARF':
				scarfs.splice(1, 0, element);
				break;
			default:
				console.error('undefined category in database');
				break;
		}
	});
	const [name, setName] = useState('Все');
	const changeCategoryName = (e) => {
		setName(e.target.innerText);
	};
	//let hats = products.filter((item) => item.category === 'HAT');
	return (
		<div className={styles.Shop}>
			<div className={styles.buttons}>
				<Link to='/home/all'>
					<button onClick={changeCategoryName}>Все</button>
				</Link>
				<Link to='/home/jackets'>
					<button onClick={changeCategoryName}>Куртки</button>
				</Link>
				<Link to='/home/hats'>
					<button onClick={changeCategoryName}>Шапки</button>
				</Link>
				<Link to='/home/scarfs'>
					<button onClick={changeCategoryName}>Шарфы</button>
				</Link>
				<Link to='/home/sweaters'>
					<button onClick={changeCategoryName}>Свитеры</button>
				</Link>
			</div>
			<div className={styles.category}>
				<Route path='/home/all' render={() => <Category name={name} products={products} />} />
				<Route path='/home/jackets' render={() => <Category name={name} products={jackets} />} />
				<Route path='/home/hats' render={() => <Category name={name} products={hats} />} />
				<Route path='/home/scarfs' render={() => <Category name={name} products={scarfs} />} />
				<Route path='/home/sweaters' render={() => <Category name={name} products={sweaters} />} />
				<Redirect from='/home' to='/home/all' />
			</div>
		</div>
	);
};

export default Shop;
