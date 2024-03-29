import styled from 'styled-components';

const StyledSmallTitle = styled.h3`
	font-family: 'DM Serif Display', serif;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 500;
	margin-bottom: 1rem;
	margin-top: 3rem;
	@media screen and (min-width: 640px) {
		margin: 0;
		text-align: left;
		font-size: 1.8rem;
		margin-right: auto;
	}
`;

export { StyledSmallTitle };
