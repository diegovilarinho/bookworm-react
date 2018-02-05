import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import HomePage from './components/pages/HomePage';
import SignupPage from "./components/pages/SignupPage";
import LoginPage from './components/pages/LoginPage';
import DashboardPage from "./components/pages/DashboardPage";
import TopNavigation from './components/navigation/TopNavigation';

const App = ({ location }) => (
	<MuiThemeProvider>
		<TopNavigation></TopNavigation>
		<div className="ui container">
		  <Route location={location} path="/" exact component={HomePage} />
		  <GuestRoute location={location} path="/login" exact component={LoginPage} />
		  <GuestRoute location={location} path="/signup" exact component={SignupPage} />
		  <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
		</div>
	</MuiThemeProvider>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
