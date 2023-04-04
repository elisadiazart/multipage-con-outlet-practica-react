import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
`;

const StyledInputText = styled.input`
	background-color: #fbfcfe;
	box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
	border: none;
	border-radius: 24px;
	padding: 1rem 2rem;
	font-weight: 700;
	font-size: 1rem;
	font-family: 'Public Sans', sans-serif;
	color: #99a7b4;
`;

const StyledSubmit = styled.input`
	padding: 1rem 2rem;
	border-radius: 24px;
	background: #ba4270;
	border-radius: 24px;
	border: none;
	color: white;
	font-weight: 700;
	font-size: 1rem;
	font-family: 'Public Sans', sans-serif;
`;

export { StyledForm, StyledInputText, StyledSubmit };
