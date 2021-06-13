import React, { useState } from 'react';
import './App.css';
import TableData from './components/Table/Table';
import './custom-hooks/useCountry';
import Button from './components/Context/Button';
import ThemeContext,{ themes } from './components/Context/ThemeContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Countrypage from './components/CountryPage'
// import countryData from './custom-hooks/useCountry';
import Search from './components/Search';

function App() {

  const [theme, setTheme] = useState(themes.dark)
  const context = { theme, setTheme };

  return (
    <div>
      
      <BrowserRouter>
      <Switch>
        <Route exact path ="/">
        <ThemeContext.Provider value={context}>
        <Button />
        <Search />
        <TableData />
        </ThemeContext.Provider>
        </Route>

        <Route exact path = "/:countryName" component={Countrypage }>
        <Countrypage />
        </Route>

      </Switch>
      </BrowserRouter>
     
    </div>
  )
}
export default App;


