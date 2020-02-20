import 'typeface-roboto';
import './app.css';
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
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Bar from './components/bar';

const history = createBrowserHistory();

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2em'
  },
  paper: {
    padding: '1em',
    height: "100%"
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    }
  },
})

function AppContainer() {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </MainContextProvider>
  );
}

function App() {
  const classes = useStyles();

  return (
    <HashRouter basename="/" history={history}>
      <Container className={classes.root} maxWidth="lg">
        <Grid item xs={12}>
          <Bar/>
          <Paper className={classes.paper} square elevation={0}>
            <Navigation/>
            <Box mt={2}>
              <Route exact path="/" component={Home} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/magic" component={Magic} />
              <Route exact path="/about" component={About} />
            </Box>
          </Paper>
        </Grid>
      </Container>
    </HashRouter>
  );
}

export default AppContainer;
