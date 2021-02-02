import data from '../initState';

const initialState = {
	items: data,
	isLoaded: true,
};

const products = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return {
				...state,
				items: action.payload,
				isLoaded: true,
			};

		default:
			return state;
	}
};

export default products;
