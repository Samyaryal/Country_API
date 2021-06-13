import { combineReducers } from "redux";
import reducerCountry from './country';
import cartReducer from './cart';

const rootReducer =  combineReducers({
  reducerCountry,
  cartReducer
});

export default rootReducer;