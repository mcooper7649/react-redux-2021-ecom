import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { SignInSignUpPage } from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { Header } from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInSignUpPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
