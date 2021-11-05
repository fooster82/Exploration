import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

const App = () => {
    return (
      <>

       <h1>Hello world</h1>
        {/* <Header />
  
        <Switch>
          <Route exact path="/">
            <Pages.Home />
          </Route>
  
          <Route path="/about">
            <Pages.About />
          </Route>
  
          <Route path="/news">
            <Pages.News />
          </Route>
  
          <Route>
            <h1>Oops, that path doesn't exist</h1>
          </Route>
        </Switch>
  
        <Footer /> */}
      </>
    )
  };
  
  export default App;