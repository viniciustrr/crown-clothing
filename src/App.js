import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component';
import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout-component';




class App extends React.Component {


  unsubscribeFromAuth = null;


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route  exact path = '/' component = {HomePage} />
          <Route  path = '/shop' component = {ShopPage} />
          <Route  exact path = '/checkout' component = {CheckoutPage} />
          <Route  exact path = '/signin' render={()=> this.props.currentUser ? (<Redirect  to='/' />) : (<SignInAndSignUpPage/>)} />
          
        </Switch>
      </div>
    );
  }
  
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});



export default connect(mapStateToProps)(App);