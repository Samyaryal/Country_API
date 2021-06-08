import React from 'react';

import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from './StyledTablecell';


function TableHeadData() {
  return (
    <TableHead >
      <TableRow className="table-head" >
        <StyledTableCell>FLAG </StyledTableCell>
        <StyledTableCell align="right">NAME</StyledTableCell>
        <StyledTableCell align="right">POPULATION</StyledTableCell>
        <StyledTableCell align="right">REGION</StyledTableCell>
        <StyledTableCell align="right">LANGUAGE</StyledTableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeadData;