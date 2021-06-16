import React, { useState } from 'react';
import './App.css';
import TableData from './components/Table/Table';
import ThemeContext, { themes } from './components/Context/ThemeContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Countrypage from './components/CountryPage'
import Nav from './components/Headers/Nav';


function App() {

  const [theme, setTheme] = useState(themes.dark)
  const context = { theme, setTheme };
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ThemeContext.Provider value={context}>
              <Nav />
              <TableData />
            </ThemeContext.Provider>
          </Route>
          <Route exact path="/:countryName" component={Countrypage} >
            <Countrypage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App;


