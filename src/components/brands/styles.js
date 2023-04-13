import styled from 'styled-components';

const StyledBrands = styled.div`
	margin-top: ${({ marginTop }) => marginTop};
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background-color: ${({ bgcolor }) => bgcolor};
	padding: 4rem 2rem;
	@media screen and (min-width: 640px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 0rem;
	}
	@media screen and (min-width: 1024px) {
		margin-top: 0;
		gap: 1rem;
		padding: 0;
	}
`;

const StyledLogo = styled.img`
	margin: auto;
	padding: 1rem;
	@media screen and (min-width: 640px) {
		padding: 1.5rem 0;
	}
	@media screen and (min-width: 1024px) {
		padding: 1rem 1.5rem;
	}
`;

export { StyledBrands, StyledLogo };
