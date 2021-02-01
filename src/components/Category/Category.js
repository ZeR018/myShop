import styles from './Category.module.css';
import ProductBlock from '../ProductBlock';
import SortPopup from '../SortPopup';

const Category = ({ sortBy, name, products, selectedSort }) => {
	if (selectedSort.type === 0) {
		products.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	} else if (selectedSort.type === 1) {
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
	} else if (selectedSort.type === 2) {
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
				<SortPopup items={sortBy} />
			</div>
			<div className={styles.content}>
				{products.map((item) => (
					<div key={item.id}>
						<ProductBlock {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
