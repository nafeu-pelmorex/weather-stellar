import 'typeface-roboto';
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './pages/home';
import Upload from './pages/upload';
import Magic from './pages/magic';
import About from './pages/about';
import { MainContextProvider } from "./context/main";
import Navigation from './components/navigation';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const history = createBrowserHistory();

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2em'
  },
  paper: {
    padding: '1em'
  }
}));

function AppContainer() {
  return (
    <MainContextProvider>
      <App/>
    </MainContextProvider>
  );
}

function App() {
  const classes = useStyles();

  return (
    <HashRouter basename="/" history={history}>
      <Container className={classes.root} maxWidth="md">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Navigation/>
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/magic" component={Magic} />
            <Route exact path="/about" component={About} />
          </Paper>
        </Grid>
      </Container>
    </HashRouter>
  );
}

export default AppContainer;
