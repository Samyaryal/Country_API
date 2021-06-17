import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../redux/actions/actions';

const useCountry = (...name) => {
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.reducerCountry);

  const url = `https://restcountries.eu/rest/v2/${
    name.length === 0 ? `all` : `name/${name}`}`;

  useEffect(() => {
    dispatch(itemsFetchData (url));
  }, [url, dispatch]);

  return countryData;
};
export default useCountry;

// const BASE_URL = `https://restcountries.eu/rest/v2/`

// const useCountry = (url = `all`) => {

//   const dispatch = useDispatch();
//   const countryData = useSelector((state) => state.reducerCountry);
  
//   useEffect(() => {
//     dispatch(itemsFetchData(BASE_URL + url));
//   }, [url, dispatch]);

//   return countryData;
// };

// export default useCountry;
