import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { MainContext } from '../../context/main';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1em'
  },
  paper: {}
}));

function Home() {
  const { state, dispatch } = useContext(MainContext);
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography gutterBottom>
        <Link to="/upload">Get Started</Link>
      </Typography>
    </Grid>
  );
}

export default Home;