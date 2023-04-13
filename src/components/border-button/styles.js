import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${({ border }) => border};
	border: 1px solid ${({ color }) => color};
	background-color: transparent;
	border-radius: 24px;
	padding: 1rem 2rem;
	font-family: 'Public Sans', sans-serif;
	font-size: 1rem;
	margin: 2rem auto;
	display: flex;
	font-weight: 700;
`;

export { StyledButton };
