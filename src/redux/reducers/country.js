import { ITEMS_HAS_ERRORED,  ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, SEARCH_COUNTRY} from '../actions/actions';

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
      loading: true,
      error: ' ',
      countries: [],
      filteredCountry:[] 
    };
    
    case  ITEMS_FETCH_DATA_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      loading: false,
      error: '',
      filteredCountries: action.payload
    }
    case ITEMS_HAS_ERRORED:
    return{
      ...state,
      countries: [],
      error: action.payload,
      loading: false,
      filteredCountries: []
    }
    
    case SEARCH_COUNTRY:
    // console.log("SEEARCH_ =>", action.payload)
    if (action.payload === null ) {
      return {...state, filteredCountry: state.countries}
    }
    const searchItem =  state.countries.filter((country) => country.name.toLowerCase().startsWith(action.payload.toLowerCase()))
    console.log("SearchItem", searchItem)
    return {
      ...state, 
      filteredCountry: searchItem
    }
    default:
    return state;
  }
}

export default reducerCountry; 
