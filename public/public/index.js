import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import ShopSingle from './ShopSingle';
import {BrowserRouter as Router,Route,browserHistory,Switch} from 'react-router-dom';
// import './index.css';

var config = {
  apiKey : "AIzaSyBMhSjjnI3qBfAcQCypmYTfV3ws1GK6Nqo",
  authDomain : "gashiqoton0494.firebaseapp.com"
}

firebase.initializeApp(config);

const Root = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/shop-single"
        render={props => <ShopSingle {...props}/>}
      />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

