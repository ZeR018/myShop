import styles from './Category.module.css';
import Product from '../Product/Product';
import SortPopup from '../SortPopup';

let items = [
	{ name: 'Названию', type: 0 },
	{ name: 'Цене', type: 1 },
	{ name: 'Популярности', type: 2 },
];
const Category = ({ name, products }) => {
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
