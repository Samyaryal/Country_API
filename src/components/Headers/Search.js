import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {  searchCountry } from '../../redux/actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const [debounce, setDebounce] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  //dispatch(searchCountry(search))

  useEffect(() => {
    dispatch(searchCountry(search))
  }, [dispatch, debounce])


  


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebounce(search);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [search]);

  // useEffect(() => {
  //   dispatch(searchCountry(debounce));
  // }, [dispatch, debounce]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
      className = "input-field"
      value = {search}
      placeholder="search"
      type="text"
      onChange ={handleInputChange}
      />
    </div>
  )
}

export default Search;