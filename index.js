import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, OwnerRegister, Home, SavedStore, Cart,
  MyPage, Menu, Store, WriteReview, Login, Search,
  Event, Register} from './containers';
import './style.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' component={App}/>
        <Route exact path='/' component={Home}/>
        <Route path='/op' component={OwnerRegister}/>
        <Route path='/event' component={Event}/>
        <Route path='/savedstore' component={SavedStore}/>
        <Route path='/cart' component={Cart}/>
        <Switch>
          <Route path='/mypage/:user_id' component={MyPage}/>
          <Route path='/mypage' component={MyPage}/>
        </Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/search' component={Search}/>
        <Switch>
          <Route path='/menu/:categories/:_id/review' component={WriteReview}/>
          <Route path='/menu/:categories/:_id/:tabs' component={Store}/>
          <Route path='/menu/:categories' component={Menu}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
