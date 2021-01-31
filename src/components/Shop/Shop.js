import styles from './Shop.module.css';
import Category from '../Category';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../store/actions/filters';

const Shop = () => {
	const { items, selectedCategory, sortBy } = useSelector(({ products, filters }) => {
		return {
			items: products.items,
			selectedCategory: filters.category,
			sortBy: filters.sortBy,
		};
	});
	const dispatch = useDispatch();

	let categories = [
		{ name: 'Все', type: 'ALL' },
		{ name: 'Куртки', type: 'JACKET' },
		{ name: 'Шапки', type: 'HAT' },
		{ name: 'Шарфы', type: 'SCARF' },
		{ name: 'Свитеры', type: 'SWEATER' },
	];

	const [name, setName] = useState('Все');
	const changeCategoryName = (e) => {
		setName(e.target.innerText);
	};
	//let hats = products.filter((item) => item.category === 'HAT');

	return (
		<div className={styles.Shop}>
			<div className={styles.buttons}>
				{categories.map((item, index) => (
					<Link key={`${item.name}_${index}`} to={`/shop/${item.type.toLowerCase()}`}>
						<button
							onClick={(e) => {
								dispatch(setCategory(item.type));
								changeCategoryName(e);
							}}
						>
							{item.name}
						</button>
					</Link>
				))}
			</div>
			<div className={styles.category}>
				{items &&
					(selectedCategory === 'ALL' ? (
						<Route
							path={`/shop/${selectedCategory.toLowerCase()}`}
							render={() => <Category name={name} products={items} sortBy={sortBy} />}
						/>
					) : (
						<Route
							path={`/shop/${selectedCategory.toLowerCase()}`}
							render={() => (
								<Category
									name={name}
									sortBy={sortBy}
									products={items.filter((item) => item.category === selectedCategory)}
								/>
							)}
						/>
					))}
			</div>
		</div>
	);
};

export default Shop;