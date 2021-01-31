import styles from './Category.module.css';
import Product from '../Product/Product';
import SortPopup from '../SortPopup';

let items = [
	{ name: 'Названию', type: 0 },
	{ name: 'Цене', type: 1 },
	{ name: 'Популярности', type: 2 },
];
const Category = ({ name, products, sortBy }) => {
	if (sortBy.type === 0) {
		products.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	} else if (sortBy.type === 1) {
		products.sort((a, b) => {
			if (a.cost < b.cost) {
				return -1;
			}
			if (a.cost > b.cost) {
				return 1;
			}
			if (a.cost < b.cost) {
				return 0;
			}
		});
	} else if (sortBy.type === 2) {
		products.sort((a, b) => {
			if (a.rating < b.rating) {
				return 1;
			}
			if (a.rating > b.rating) {
				return -1;
			}
			if (a.rating < b.rating) {
				return 0;
			}
		});
	}
	return (
		<div className={styles.Category}>
			<div className={styles.category_header}>
				<h1>{name}</h1>
				<SortPopup items={items} />
			</div>
			<div className={styles.content}>
				{products.map((item) => (
					<div key={item.id}>
						<Product {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
