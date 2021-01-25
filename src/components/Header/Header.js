import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className={styles.Header}>
			Header
			<div>
				<Link to='/cart'>
					<button>Корзина</button>
				</Link>
				<Link to='/home'>
					<button>Home</button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
