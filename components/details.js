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

const theme = createMuiTheme({
  typography: {
    fontSize: 12
  }
});

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
    width: '100%',
  },
  media: {
    height: 140,
  },
  close: {
    color: 'white',
  }
});

function Details({ type, account_name, status, balance, currency, notes, onCloseSelection }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            title=""
          />
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              gutterBottom
            >
              {account_name}
            </Typography>

            <Grid container>
              <Grid
                item
                xs={6}
              >
                <Typography variant="button">
                  Type
                </Typography>
                <Typography gutterBottom>
                  {type}
                </Typography>

                <Typography variant="button">
                  Status
                </Typography>
                <Typography gutterBottom>
                  {status}
                </Typography>

                <Typography variant="button">
                  Balance
                </Typography>
                <Typography gutterBottom>
                  {balance}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <Typography variant="button">
                  Account name
                </Typography>
                <Typography gutterBottom>
                  {account_name}
                </Typography>

                <Typography variant="button">
                  Currency
                </Typography>
                <Typography gutterBottom>
                  {currency}
                </Typography>

                <Typography variant="button">
                  Notes
                </Typography>
                <Typography gutterBottom>
                  {notes}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid>
          <Toolbar>
            <IconButton
              className={classes.close}
              color="default"
              onClick={onCloseSelection}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </Grid>
      </>
    </ThemeProvider>
  );
}

export default Details;

