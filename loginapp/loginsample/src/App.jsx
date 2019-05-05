import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import LoginHooks from './LoginPage/LoginHooks';
import {configureFakeBackEnd} from './helper/fake.backend'
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './HomePage/HomePage';

configureFakeBackEnd();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  render() {
    return (
      <div className="container">
      <div>
        <Router>
          <div>
           <Route path='/login' component={LoginHooks}></Route>    
           <PrivateRoute exact path='/home' component={HomePage} ></PrivateRoute>       
          </div>
        </Router>
      </div>        
      </div>
    );
  }
}

export default App;
