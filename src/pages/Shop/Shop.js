import styles from './Shop.module.css';
import Category from '../../components/Category';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

const Shop = () => {
	const { sortBy, products, selectedSort, categories, isLoaded } = useSelector(
		({ products, filters }) => {
			return {
				products: products.items,
				isLoaded: products.isLoaded,
				selectedSort: filters.selectedSort,
				categories: filters.categories,
				sortBy: filters.sortBy,
			};
		},
	);
	return (
		<div className={styles.Shop}>
			<div className={styles.buttons}>
				{categories.map((item, index) => (
					<Link key={`link_${item.name}_${index}`} to={`/shop/${item.type.toLowerCase()}`}>
						<button>{item.name}</button>
					</Link>
				))}
			</div>
			<div className={styles.category}>
				<Switch>
					{categories.map((item, index) => (
						<Route
							key={`route_${item.name}_${index}`}
							path={`/shop/${item.type.toLowerCase()}`}
							render={() => (
								<Category
									sortBy={sortBy}
									categoryName={item.name}
									selectedSort={selectedSort}
									products={
										item.type === 'ALL'
											? products
											: products.filter((prod) => prod.category === item.type)
									}
								/>
							)}
						/>
					))}
					<Redirect from='/shop/' to='/shop/all' />
				</Switch>
			</div>
		</div>
	);
};

export default Shop;
