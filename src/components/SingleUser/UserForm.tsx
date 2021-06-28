import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { User } from '../../state/slice';

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

const StyledField = styled(Field)`
	font-size: 26px;
`;

const ErrorLabel = styled.div`height: 30px;`;

const UserSchema = Yup.object().shape({
	first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	last_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required')
});

type Props = {
	user: User;
	onSubmit: (user: Partial<User>) => void;
};

const UserForm = ({ user, onSubmit }: Props) => {
	const { first_name, last_name, email } = user;
	return (
		<Formik
			initialValues={{
				first_name,
				last_name,
				email
			}}
			validationSchema={UserSchema}
			onSubmit={(values) => {
				onSubmit({ ...user, ...values });
			}}
		>
			{({ errors, touched }) => (
				<StyledForm>
					<StyledField data-test-id="first-name-field" name="first_name" placeholder="first name" />
					{<ErrorLabel>{errors.first_name && touched.first_name ? errors.first_name : null}</ErrorLabel>}
					<StyledField data-test-id="last-name-field" name="last_name" placeholder="last name" />
					{<ErrorLabel>{errors.last_name && touched.last_name ? errors.last_name : null}</ErrorLabel>}
					<StyledField data-test-id="email-field" name="email" type="email" placeholder="email" />
					{<ErrorLabel>{errors.email && touched.email ? errors.email : null}</ErrorLabel>}
					<button data-test-id="submit-button" type="submit">
						Submit
					</button>
				</StyledForm>
			)}
		</Formik>
	);
};

export default UserForm;
