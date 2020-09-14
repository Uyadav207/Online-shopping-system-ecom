import React, { useEffect } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../src/Pages/Header'
import Home from '../src/Pages/Home'
import Checkout from '../src/Pages/Checkout'
import Login from './Pages/Login';
import { useStateValue } from './Context/StateProvider';
import { auth } from './firebase';
import Footer from './Pages/Footer';

function App() {

const [{ user }, dispatch] = useStateValue();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      // User-Login-In


      dispatch({ type: 'SET_USER', user: authUser })
    } else {
      // User-Loged-out
      dispatch({ type: 'SET_USER', user: null })
    }
  });

return () => {
  unsubscribe();
}

}, [])

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
