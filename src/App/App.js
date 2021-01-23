import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../components/Shop';
import Footer from '../components/Footer';
import store from '../store/store';

function App() {
	const { someDate } = store.getState();
	return (
		<div className={styles.App}>
			<Header />
			<Shop />
			<Footer />
			{someDate}
		</div>
	);
}

export default App;
