import React from 'react';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Details from '../components/details.js';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const useStyles = makeStyles({
  paper: {
    minHeight: '100vh',
    height: '100%',
  },
  grid: {
    height: '100%',
  },
  fab: {
    position: 'absolute',
    top: 24,
    right: 24,
  }
});

function Sidebar({ selection, onCloseSelection }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper
        square
        elevation={0}
        className={classes.paper}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          wrap="nowrap"
          className={classes.grid}
        >
          <Fab
            color="default"
            className={classes.fab}
          >
            <MenuIcon />
          </Fab>

          {
            selection &&
            (
              <Details
                {...selection}
                onCloseSelection={onCloseSelection}
              />
            )
          }

        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default Sidebar;

