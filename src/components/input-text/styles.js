import styled from 'styled-components';

const StyledLabel = styled.label`
	padding: 0 1rem;
`;

const StyledInput = styled.input`
	border: none;
	background-color: transparent;
	padding: 0.5rem;
	border-bottom: 1px solid #b4c1cc;
	@media screen and (min-width: 1024px) {
		padding: 0;
	}
`;

export { StyledInput, StyledLabel };
