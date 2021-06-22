import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {  searchCountry } from '../../redux/actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedValue, setDebouncedValue ] = useState(' ');
  //dispatch(searchCountry(search))

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    dispatch(searchCountry(searchTerm));
  }, [debouncedValue, dispatch]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
      <input
      className = "input-field"
      value = {searchTerm}
      placeholder="search"
      type="text"
      onChange ={handleInputChange}
      />
    </div>
  )
}

export default Search;