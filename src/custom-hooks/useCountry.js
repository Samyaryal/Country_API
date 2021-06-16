import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../redux/actions/actions';

// const useCountry = (url) => {
//   const dispatch = useDispatch();
//   const countryData = useSelector((state) => state.reducerCountry.countries);

//   const baseURL = `https://restcountries.eu/rest/v2/`

//   useEffect(() => {
//     dispatch(itemsFetchData(baseURL + url));
//   }, [dispatch, url]);

//   return countryData ;
// };
// export default useCountry;
const BASE_URL = `https://restcountries.eu/rest/v2/`

const useCountry = (url = `all`) => {

  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.reducerCountry);
  
  useEffect(() => {
    dispatch(itemsFetchData(BASE_URL + url));
  }, [url, dispatch]);

  return countryData;
};

export default useCountry;
