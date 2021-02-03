import axios from 'axios';
const weatherAPIKey = '73bb16e78aa16615fd7a7fe2a996c26d';
const selectedCity = 'Nizhny Novgorod';

export const fetchWeather = () => (dispatch) => {
	navigator.geolocation.getCurrentPosition(success, error, {
		enableHighAccuracy: false,
	});

	function success({ coords }) {
		const { latitude, longitude } = coords;

		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=${weatherAPIKey}`,
			)
			.then((data) => {
				dispatch({
					type: 'SET_WEATHER',
					payload: {
						iconID: data.data.weather[0].icon,
						city: data.data.name,
						weather: data.data.main,
					},
				});
			});
	}

	function error({ message }) {
		console.log(message); // при отказе в доступе получаем PositionError: User denied Geolocation

		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity},ru&appid=${weatherAPIKey}`,
			)
			.then((data) => {
				dispatch({
					type: 'SET_WEATHER',
					payload: {
						icon: data.data.weather[0].icon,
						city: data.data.name,
						weather: data.data.main,
					},
				});
			});
	}
};
