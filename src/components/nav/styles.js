import styled from 'styled-components';

const StyledUl = styled.ul`
	display: flex;
	@media screen and (min-width: 720px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 2rem 1rem;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	padding: 3rem 2rem 1rem 2rem;
	align-items: center;
	position: relative;
	z-index: 10;
	@media screen and (min-width: 720px) {
		display: flex;
		width: 200px;
		padding: 0;
		align-items: center;
	}
`;

const StyledMenuIcon = styled.img`
	@media screen and (min-width: 720px) {
		display: none;
	}
`;

const StyledNav = styled.nav``;

export { StyledUl, StyledDiv, StyledNav, StyledMenuIcon };
