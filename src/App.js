import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../src/Pages/Header'
import Home from '../src/Pages/Home'
import Checkout from '../src/Pages/Checkout'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
