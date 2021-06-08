import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import StyledTableCell from './StyledTablecell';
import StyledTableRow from './StyledTablerow';

import useCountry from '../../custom-hooks/useCountry';

function TableBodyData() {

  const { data, error } = useCountry(`all`);
  console.log("Here is the data in tablebody", data)

  if (error) throw error;

  return (
    <TableBody>
      {
        data.map((country) => {
          const { name, flag, population, region, languages } = country
          return (
            <StyledTableRow key={name} className="table-data">
              <StyledTableCell component="th" scope="row">
                <img
                  alt=""
                  src={flag}
                  height="150"
                  width="270"
                />
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: "purple" }} >{name}</StyledTableCell>
              <StyledTableCell align="right">{population}</StyledTableCell>
              <StyledTableCell align="right">{region}</StyledTableCell>
              <StyledTableCell align="right">
                {languages.map(lang => <li>{lang.name}</li>)}
              </StyledTableCell>
              {/* <StyledTableCell>
                  <button> BUY</button>
                </StyledTableCell> */}
            </StyledTableRow>

          )

        }
        )}

    </TableBody>
  )
}

export default TableBodyData;