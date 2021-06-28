import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RepoListItem from './UserListItem';
import { User, users } from '../../state/slice';

const Header = styled.h2`
	margin: 0;
	padding: 20px;
`;

const CreateUserButton = styled(Link)`
	position: absolute;
	top: 10px;
	right: 10px;
`;

const UserList = () => {
	return (
		<React.Fragment>
			<Header>List of users</Header>
			<CreateUserButton to="/new">Create new user</CreateUserButton>
			<React.Fragment>{useSelector(users).map((user: User) => <RepoListItem user={user} />)}</React.Fragment>
		</React.Fragment>
	);
};

export default UserList;
