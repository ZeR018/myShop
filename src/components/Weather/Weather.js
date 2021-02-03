import { useSelector } from 'react-redux';

import styles from './Weather.module.css';

const Weather = () => {
	const weather = useSelector(({ weather }) => weather);
	const temp = Math.round(weather.weather.temp);

	return (
		<div className={styles.weatherBlock}>
			<div className={styles.weather}>
				<img src={`http://openweathermap.org/img/wn/${weather.iconID}@2x.png`} />
				<div className={styles.info}>
					<h1>{weather.city}</h1>
					<h2>{temp} °C</h2>
				</div>
			</div>
			<b className={styles.b}>
				{weather.iconID &&
					weather.suggestions.find((item) => {
						return +item.t < temp;
					}).value}
			</b>
		</div>
	);
};

export default Weather;
