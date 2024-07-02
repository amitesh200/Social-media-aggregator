// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import PostEditor from './PostEditor';
import AccountSettings from './AccountSettings';
import Notifications from './Notifications';
import Login from './Login'; // Assuming a Login component for authentication
import PrivateRoute from './PrivateRoute'; // Assuming a PrivateRoute component for protected routes

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/post" component={PostEditor} />
          <PrivateRoute path="/account" component={AccountSettings} />
          <PrivateRoute path="/notifications" component={Notifications} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
