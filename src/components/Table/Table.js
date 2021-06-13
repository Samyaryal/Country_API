import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBodyData from './TableBody';
import TableHeadData from './TableHead';


function TableData() {
  return (
    <div >
    <TableContainer >
      <Table >
        <TableHeadData />
        <TableBodyData />
      </Table>
    </TableContainer>
    </div>
  )
}
export default TableData;