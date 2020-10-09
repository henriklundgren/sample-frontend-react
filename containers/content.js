import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import InvoicesTable from '../components/invoices-table.js';

function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          color="primary"
        >
          All invoices - 2016
        </Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          edge="end"
          color="primary"
          aria-label="menu"
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function Content({ onSelection, selection, data }) {
  const [orderBy, setOrderBy] = React.useState('type');
  const [order, setOrder] = React.useState('desc');

  const sortHandler = (event, value) => {
    if (value === orderBy) {
      if (order === 'desc') {
        setOrder('asc');
      } else {
        setOrder('desc');
      }
    } else {
      setOrderBy(value);
    }
  };

  if (!data) {
    return null;
  }

  return (
    <>
      <Header />
      <Grid item container wrap="nowrap" direction="column">
        <InvoicesTable
          selection={selection}
          rows={stableSort(data, getComparator(order, orderBy))}
          onSort={sortHandler}
          onRow={({ data }) => onSelection(data)}
          orderBy={orderBy}
          order={order}
        />
      </Grid>
    </>
  );
}

export default Content;

