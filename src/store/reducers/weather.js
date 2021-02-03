const initialState = {
	city: 'Nizhny Novgorod',
	iconID: 0,
	weather: {},
	isLoaded: false,

	suggestions: [
		{ t: 10, value: 'На улице прохладно, не забудь куртку!' },
		{ t: 0, value: 'На улице может быть слякоть. Не промокни!' },
		{ t: '-5', value: 'Самое время для игры в снежки! Не забудь перчатки!' },
		{ t: '-10', value: 'За окном достаточно холодно! Теплые штаны и шарф не помешают!' },
		{ t: '-15', value: 'Берегись гололеда и одевайся теплее!' },
		{ t: '-100', value: 'Ну и мороз сегодня...' },
	],
};

const weather = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_WEATHER':
			return {
				...state,
				city: action.payload.city,
				iconID: action.payload.iconID,
				weather: action.payload.weather,
				isLoaded: true,
			};
		default:
			return state;
	}
};

export default weather;
