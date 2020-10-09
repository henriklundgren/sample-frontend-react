import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Capitalize value
 * @param {string} value
 * @returns {string}
 */
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const columns = [
  {
    field: 'type',
    headerName: 'Type',
    width: 120,
    valueGetter(params) {
      return capitalize(params.getValue(params.field));
    },
  },
  { field: 'account_name', headerName: 'Account Name', width: 240 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'currency', headerName: 'Currency', width: 120 },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 120,
    valueGetter(params) {
      const value = params.getValue(params.field);
      return '$' + value;
    },
  },
];


const useStyle = makeStyles({
  root: {
    // use Paper instead
    border: '0 none',
  },
  row: {
    cursor: 'pointer',
  },
});

function InvoicesTable({ onRow, rows, selection, onSort, orderBy, order }) {
  const classes = useStyle();

  const sortHandler = (field) => (event) => {
    onSort(event, field);
  };

  return (
    <div style={{height: '100%', padding: 24 }}>
      <Paper elevation={1} style={{ height: '100%' }}>
        <Toolbar variant="dense">
          <Typography variant="h6">Invoices</Typography>
        </Toolbar>
        <Divider />

        {/*<DataGrid
          onRowSelected={onRow}
          loading={false}
          showColumnRightBorder={true}
          className={classes.root}
          hideFooter
          columns={columns}
          rows={rows}
          autoPageSize
          autoHeight
          pageSize={3}
        />*/}

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(({ headerName, field }) => {
                  return (
                    <TableCell key={field}>
                      <TableSortLabel
                        active={orderBy === field}
                        direction={order}
                        onClick={sortHandler(field)}
                      >
                        {headerName}
                      </TableSortLabel>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(({ id, type, account_name, status, currency, balance, notes }) => {
                const active = selection && id === selection.id;
                return (
                  <TableRow
                    className={classes.row}
                    key={id}
                    hover
                    tabIndex={-1}
                    selected={active}
                    onClick={() => onRow({ data: { id, type, account_name, status, currency, balance, notes } })}
                  >
                    <TableCell>
                      {capitalize(type)}
                    </TableCell>
                    <TableCell>
                      {account_name}
                    </TableCell>
                    <TableCell>
                      {status}
                    </TableCell>
                    <TableCell>
                      {currency}
                    </TableCell>
                    <TableCell>
                      ${balance}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default InvoicesTable;

