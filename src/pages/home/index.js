import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { MainContext } from '../../context/main';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2em'
  },
  paper: {
    padding: '2em'
  }
}));

function Home() {
  const { state, dispatch } = useContext(MainContext);
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography gutterBottom>
            Get Started
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Home;