import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useCountry from '../custom-hooks/useCountry';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20
  }
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function TableData() {
  const classes = useStyles();
  const { data: datas, error } = useCountry(`all`);

  if (error) throw error;

  return (
    <TableContainer component={Paper}>
      <Table className ={classes.table}aria-label="customized table">
        <TableHead >
          <TableRow  className ="table-head" >
            <StyledTableCell>FLAG </StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">POPULATION</StyledTableCell>
            <StyledTableCell align="right">REGION</StyledTableCell>
            <StyledTableCell align="right">LANGUAGE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <StyledTableRow key={data.name} className="table-data">
              <StyledTableCell component="th" scope="row">
                <img
                  alt=""
                  src={data.flag}
                  height="150"
                  width="270"
                />
              </StyledTableCell>
              <StyledTableCell align="right" style={{color: "purple"}} >{data.name}</StyledTableCell>
              <StyledTableCell align="right">{data.population}</StyledTableCell>
              <StyledTableCell align="right">{data.region}</StyledTableCell>
              <StyledTableCell align="right">
                {data.languages.map(lang => <li>{lang.name}</li>)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableData;

