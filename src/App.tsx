import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';

import { getUsers, users } from './state/slice';
import UserList from './components/UserList/UserList';
import SingleUser from './components/SingleUser/SingleUser';

const createBrowserHistory = require('history').createBrowserHistory;

export const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: beige;
    color: gray;
    height: 100vh;
  }
`;

const App = () => {
	const dispatch = useDispatch();
	const usersLoaded = useSelector(users).length;

	useEffect(() => {
		if (!usersLoaded) {
			dispatch(getUsers());
		}
	}, []);

	return (
		<React.Fragment>
			<GlobalStyle />
			<Router history={history}>
				<Switch>
					<Route path="/:userId">
						<SingleUser />
					</Route>
					<Route path="/">
						<UserList />
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default App;
