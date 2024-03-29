import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
	@media screen and (min-width: 640px) {
	}
	@media screen and (min-width: 1024px) {
		position: relative;
		width: auto;
	}
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
	@media screen and (min-width: 640px) {
		position: relative;
	}
	@media screen and (min-width: 1024px) {
		width: auto;
		padding-right: 14rem;
	}
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
	cursor: pointer;
	@media screen and (min-width: 640px) {
		position: absolute;
		right: 7rem;
	}
	@media screen and (min-width: 1024px) {
		position: absolute;
		right: 0rem;
	}
`;

export { StyledForm, StyledInputText, StyledSubmit };
