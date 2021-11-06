import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import * as Layout from './layout';
import * as Pages from './pages';

const App = () => {
    return (
      <>

        <Header />
  
        <Switch>
          <Route exact path="/">
            <Pages.Home />
          </Route> 
  
          <Route>
            <h1>Oops, that path doesn't exist</h1>
          </Route>
        </Switch>
  
        <Footer />
      </>
    )
  };
  
  export default App;