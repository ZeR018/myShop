import styles from './Shop.module.css';
import Category from '../Category';
import { Route, Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Shop = () => {
	const { items } = useSelector(({ products, filters }) => {
		return {
			items: products.items,
		};
	});

	let hats = [],
		jackets = [],
		scarfs = [],
		sweaters = [];
	items.forEach((element) => {
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
				<Link to='/shop/all'>
					<button onClick={changeCategoryName}>Все</button>
				</Link>
				<Link to='/shop/jackets'>
					<button onClick={changeCategoryName}>Куртки</button>
				</Link>
				<Link to='/shop/hats'>
					<button onClick={changeCategoryName}>Шапки</button>
				</Link>
				<Link to='/shop/scarfs'>
					<button onClick={changeCategoryName}>Шарфы</button>
				</Link>
				<Link to='/shop/sweaters'>
					<button onClick={changeCategoryName}>Свитеры</button>
				</Link>
			</div>
			<div className={styles.category}>
				<Route path='/shop/all' render={() => <Category name={name} products={items} />} />
				<Route path='/shop/jackets' render={() => <Category name={name} products={jackets} />} />
				<Route path='/shop/hats' render={() => <Category name={name} products={hats} />} />
				<Route path='/shop/scarfs' render={() => <Category name={name} products={scarfs} />} />
				<Route path='/shop/sweaters' render={() => <Category name={name} products={sweaters} />} />
				<Redirect from='/shop' to='/shop/all' />
			</div>
		</div>
	);
};

export default Shop;
