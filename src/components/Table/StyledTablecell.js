import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20
  }
}))(TableCell);

export default StyledTableCell;