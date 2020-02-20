import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './pages/home';
import Upload from './pages/upload';
import Magic from './pages/magic';
import About from './pages/about';
import { MainContextProvider } from "./context/main";
import Title from './components/title';
import Navigation from './components/navigation';

const history = createBrowserHistory();

function AppContainer() {
  return (
    <MainContextProvider>
      <App/>
    </MainContextProvider>
  );
}

function App() {
  return (
    <Router history={history}>
      <React.Fragment>
        <Title title={'Weather Stellar'} />
        <Navigation/>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/magic" component={Magic} />
        <Route exact path="/about" component={About} />
      </React.Fragment>
    </Router>
  )
}

export default AppContainer;
