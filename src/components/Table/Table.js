import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableBodyData from './TableBody';
import TableHeadData from './TableHead';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function TableData() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeadData />
        <TableBodyData />
      </Table>
    </TableContainer>

  )
}

export default TableData;