import React, { useContext } from "react";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useCountry from '../../custom-hooks/useCountry';
import CountryPage from '../CountryPage';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/ThemeContext';
import { useHistory } from 'react-router-dom';

function TableBodyData() {
  const countryData = useCountry(`all`);
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  // const handleCountryClick = () => {
  //   history.push(`/${name}`);
  // };

  return (
    <TableBody>
      {
        countryData.map((country) => {
          const { name, flag, population, region, languages } = country
          return (
            <TableRow key={name} className="table-data">
              <TableCell style={{ fontSize: "18px", background: theme.background, color: theme.color }} align="center" component="th" scope="row">
                <img
                  alt=""
                  src={flag}
                  height="150"
                  width="270"
                />
              </TableCell>
              <TableCell style={{ fontSize: "18px", background: theme.background, color: "darkblue" }} align="center">
                <Link to={`${name}`}>{name}</Link>
              </TableCell>
              <TableCell style={{ fontSize: "18px", background: theme.background, color: theme.color }} align="center">{population}</TableCell>
              <TableCell style={{ fontSize: "18px", background: theme.background, color: theme.color }} align="center">{region}</TableCell>
              <TableCell style={{ fontSize: "18px", background: theme.background, color: theme.color }} align="center">
                {languages.map(lang => <li>{lang.name}</li>)}
              </TableCell>
              <TableCell style={{ fontSize: "18px", background: theme.background, color: theme.color }}>
                <button> BUY</button>
              </TableCell>
            </TableRow>
          )
        }
        )}
    </TableBody>
  )
}

export default TableBodyData;