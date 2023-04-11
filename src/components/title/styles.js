import styled from 'styled-components';

const StyledTitle = styled.h2`
	font-family: 'DM Serif Display', serif;
	font-weight: 400;
	font-size: 2.375rem;
	line-height: 48px;
	text-align: center;
	padding-bottom: 2rem;
	color: ${({ color }) => color};
`;

export { StyledTitle };
