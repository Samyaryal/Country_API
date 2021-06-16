import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// const saveToLocalStorage = localStorage.setItem("SavedList");


const initialState = {
  reducerCountry: {
    countries: [],
    error: '',
    loading: false,
    filteredCountry:[]
  },
  cartReducer:{
    cartItems: [],
  }
}

const makeStore = () => {
  const middlewares = [thunk];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      });
    }
  }
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

export default makeStore;

