import React,{useState} from 'react';

//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Search = () => {
  const [search, setSearch] = useState()

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
      value = {search}
      placeholder="search"
      type="text"
      onhange ={handleInputChange}
      />
      {/* <ShoppingCartIcon /> */}
    </div>
  )
}

export default Search;