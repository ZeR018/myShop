import styles from './Shop.module.css';
import Category from '../Category';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../store/actions/filters';

const Shop = () => {
	const { sortBy, products, selectedCategory, selectedSort, categories, isLoaded } = useSelector(
		({ products, filters }) => {
			return {
				products: products.items,
				isLoaded: products.isLoaded,
				selectedCategory: filters.selectedCategory,
				selectedSort: filters.selectedSort,
				categories: filters.categories,
				sortBy: filters.sortBy,
			};
		},
	);
	const cartItems = useSelector(({ cart }) => cart.items);
	console.log(cartItems);
	const dispatch = useDispatch();

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
				{products &&
					(selectedCategory === 'ALL' ? (
						<Route
							path={`/shop/${selectedCategory.toLowerCase()}`}
							render={() => (
								<Category
									sortBy={sortBy}
									name={name}
									products={products}
									selectedSort={selectedSort}
								/>
							)}
						/>
					) : (
						<Route
							path={`/shop/${selectedCategory.toLowerCase()}`}
							render={() => (
								<Category
									sortBy={sortBy}
									name={name}
									selectedSort={selectedSort}
									products={products.filter((item) => item.category === selectedCategory)}
								/>
							)}
						/>
					))}
			</div>
		</div>
	);
};

export default Shop;
