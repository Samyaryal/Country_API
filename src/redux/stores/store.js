import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


const toStorage = (state) => {
  try {
    const toSave = JSON.stringify(state);
    localStorage.setItem("key", toSave);
  } catch (error) {
    console.log(error);
  }
};

const fromStorage = () => {
  try {
    const savedItem = localStorage.getItem("key");
    if (savedItem  === null) return [];
    return JSON.parse(savedItem );
  } catch (error) {
    console.log(error);
    return [];
  }
};

const initialState = {
  reducerCountry: {
    countries: [],
    error: '',
    loading: false,
    filteredCountry:[]
  },
  cartReducer:{
    cartItems: fromStorage(),
  }
}

  const middlewares = [thunk];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      });
    }
  }
  const makeStore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  
makeStore.subscribe(() => toStorage(makeStore.getState().cartReducer.cartItems));

export default makeStore;


