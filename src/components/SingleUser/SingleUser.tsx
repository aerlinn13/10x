import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { User, updateUser, createUser, deleteUser } from '../../state/slice';
import { RootState } from '../../state/store';
import UserForm from './UserForm';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0px 20px;
`;

const BackLink = styled(Link)`
    padding: 20px;
    font-size: 18px;
`;

const DeleteUserButton = styled.button`
	margin-top: 15px;
	background-color: red;
	color: white;
`;

const SingleUser = () => {
	const { userId } = useParams<any>();
	const user = useSelector<RootState, User | undefined>((state) => state.users[userId]) || ({} as User);
	const dispatch = useDispatch();
	const update = (user: Partial<User>) => dispatch(updateUser(user));
	const create = (user: Partial<User>) => dispatch(createUser(user));
	const remove = (userId: string) => dispatch(deleteUser(userId));

	return (
		<Wrapper>
			<BackLink to="/">Back</BackLink>
			<h1>{user.id ? `Edit user details` : `Create new user`}</h1>
			<UserForm user={user} onSubmit={user.id ? update : create} />
			{user.id && <DeleteUserButton onClick={() => remove(user.id)}>Delete user</DeleteUserButton>}
		</Wrapper>
	);
};

export default SingleUser;

export const ValidationSchemaExample = () => <div />;
