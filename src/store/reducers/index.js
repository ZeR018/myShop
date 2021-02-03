import filters from './filters';
import products from './products';
import cart from './cart';
import weather from './weather';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	filters,
	products,
	cart,
	weather,
});

export default rootReducer;
