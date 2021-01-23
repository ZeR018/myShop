import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../components/Shop';
import Footer from '../components/Footer';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Shop />
			<Footer />
		</div>
	);
}

export default App;
