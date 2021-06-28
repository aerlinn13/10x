import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { User } from '../../state/slice';

const Wrapper = styled.div`
	width: calc(100% - 60px);
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	border-bottom: 1px solid gray;
	padding: 20px;
	margin: 0px 10px;
`;

const Header = styled(Link)`
    color: blue;
    font-weight: 700;
    font-size: 26px;
`;

const Image = styled.img`
	height: 40px;
	width: 40px;
	margin-right: 20px;
`;

const UserListItem = ({ user }: { user: User }) => {
	const { id, first_name, last_name, avatar = `https://via.placeholder.com/40` } = user;
	return (
		<Wrapper data-test-id="user-item">
			<Image src={avatar} />
			<Header data-test-id={id} to={`/${id}`}>{`${first_name} ${last_name}`}</Header>
		</Wrapper>
	);
};

export default UserListItem;
