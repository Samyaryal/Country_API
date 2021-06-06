import {useState, useEffect} from 'react';
const baseurl = "https://restcountries.eu/rest/v2/";

function useCountry (url){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
