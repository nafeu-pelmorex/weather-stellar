import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1em'
  },
  paper: {}
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/upload");
  }

  return (
    <Grid item xs={12} align="center">
      <Box p={4}>
        <Typography variant="h5" gutterBottom>
          Hi there! Thank you for Choosing Weather-stellar 🙂
        </Typography>
        <Typography gutterBottom>
          Let's find out how Weather impacts your business. Click on the link below to get started!
        </Typography>
      </Box>
      <Box pb={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={handleClick}
        >
          Get Started
        </Button>
      </Box>
    </Grid>
  );
}

export default Home;