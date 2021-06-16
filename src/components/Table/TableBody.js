import React, { useContext} from "react";
import {useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useCountry from '../../custom-hooks/useCountry';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/ThemeContext';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/actions/actions';

function TableBodyData() {
  const dispatch = useDispatch();

  const { filteredCountry } = useSelector((state) => state.reducerCountry)
  const { theme } = useContext(ThemeContext);

  const { countries, error, loading } = useCountry();
  console.log("filteredCountry", countries)
  if (loading) return "Data is loading!"
  if (error) return "Something went wrong"

 
  
  // if (filteredCountry.length === 0 ? <TableBody /> : filteredCountry)
    return (
      <>
      <TableBody>
        {
          countries.map((country) => {
            const { name, flag, population, region, languages } = country
            return (
              <TableRow key={name} className="table-data">
                <TableCell style={{ background: theme.background, color: theme.color }} align="center" component="th" scope="row">
                  <img
                    alt=""
                    src={flag}
                    height="110"
                    width="200"
                  />
                </TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">
                  <Link style={{color: theme.color}}  className ="link" to={`${name}`}>{name}</Link>
                </TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">{population}</TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">{region}</TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">
                  {languages.map(lang =><li>{lang.name}</li>)}
                </TableCell>

                <TableCell style={{ background: theme.background, color: theme.color }} align="center">
                  <button onClick = {() => (dispatch(addToCart(country)))} >Add To Cart</button>
                </TableCell>
              </TableRow>
            )
          }
          )}
            
    </TableBody>
    </>
    )
  }

  export default TableBodyData;