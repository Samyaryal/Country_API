import { ITEMS_HAS_ERRORED,  ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS} from '../actions/actions';

const initialState ={
  countries: [],
  error: '',
  loading: false
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
    }
    case ITEMS_HAS_ERRORED:
    return{
      ...state,
      countries: [],
      error: action.payload,
      loading: false,
    }
    default:
    return state;
  }
}

export default reducerCountry; 
