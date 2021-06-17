import { 
  ITEMS_HAS_ERRORED,  
  ITEMS_IS_LOADING, 
  ITEMS_FETCH_DATA_SUCCESS, 
  SEARCH_COUNTRY_BYNAME,
} from '../actions/actions';

const initialState ={
  countries: [],
  error: '',
  loading: false,
  filteredCountry: [],
}

const reducerCountry = (state=initialState, action) => {
  switch(action.type){
    case ITEMS_IS_LOADING: 
    return {
      ...state,
      loading: true
    };
    
    case  ITEMS_FETCH_DATA_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      loading: false,
      error: '',
      filteredCountry: action.payload
    }
    case ITEMS_HAS_ERRORED:
    return{
      ...state,
      countries: [],
      error: action.payload,
      loading: false,
    }
    case SEARCH_COUNTRY_BYNAME:
    const searchItem =  state.countries.filter((country) => country.name.toLowerCase().startsWith(action.payload.toLowerCase()))
    return {
      ...state, 
      filteredCountry: searchItem
    }
    default:
    return state;
  }
}

export default reducerCountry; 
