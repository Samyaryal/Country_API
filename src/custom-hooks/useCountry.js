import {useState, useEffect} from 'react';
const baseurl = "https://restcountries.eu/rest/v2/";

function useCountry (url){
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect (() => {
    (async function datas(){
      try{
        const country = await fetch(baseurl+ url);
        const response = await country.json();
        setData(response);
      }
      catch(error){
        setError(error);
      }
    })()
  }, [url])

  return {data, error};
}


export default useCountry;
