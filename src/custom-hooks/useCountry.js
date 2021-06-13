import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../redux/actions/actions';

const useCountry = (url) => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.reducerCountry.countries);
  // const url = `https://restcountries.eu/rest/v2/all`;
  const baseURL = `https://restcountries.eu/rest/v2/`

  useEffect(() => {
    dispatch(itemsFetchData(baseURL + url));
  }, [dispatch, url]);

  return countryData;
};
export default useCountry;
