import React from 'react';
import './App.css';
import useCountry from './custom-hooks/useCountry';

function App() {
  
  const {data: datas, error} = useCountry(`all`);
  console.log("here is the data", datas)

  if (error) throw error;

  return (
    <div>
      Datas are here:
    </div>
 
  );
}

export default App;
