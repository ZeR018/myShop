import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className={styles.Header}>
			<img
				className={styles.logo}
				src='https://sun9-76.userapi.com/impf/C0Rcxd2ATvADTsM5mx8QUYAmWRbbwgfjsAvJfw/XXibNEnOrS0.jpg?size=237x74&quality=96&proxy=1&sign=1f3ae9802f9d03f8131d3f986b8e751d&type=album'
				alt=''
			/>
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
