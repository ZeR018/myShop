import filtersReducer from './filters';
import productsReducer from './products';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	filters: filtersReducer,
	products: productsReducer,
});

export default rootReducer;
