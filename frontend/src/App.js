import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ListingDetails from './pages/ListingDetails';
import Payment from './pages/Payment';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/listing/:id" component={ListingDetails} />
      <Route path="/payment" component={Payment} />
    </Switch>
  </Router>
);

export default App;
