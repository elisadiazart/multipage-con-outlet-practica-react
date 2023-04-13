import styled from 'styled-components';

const StyledFooter = styled.footer``;

const StyledDiv = styled.div`
	padding: 0 2rem;
	margin-bottom: 6rem;
	@media screen and (min-width: 640px) {
		width: 570px;
		margin: auto;
		margin-bottom: 8rem;
	}
	@media screen and (min-width: 1024px) {
		display: flex;
		width: 900px;
		justify-content: space-between;
		margin-bottom: 4rem;
		padding: 0;
	}
`;

const StyledNav = styled.nav`
	background-color: #1b262f;
	@media screen and (min-width: 640px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.6rem 2.5rem;
		background-image: url(/shared/desktop/bg-pattern-circle.svg);
		background-repeat: no-repeat;
		background-size: 550px;
		background-position: 190% 5%;
	}
`;

const StyledLogo = styled.img`
	padding-top: 4rem;
	margin: auto;
	width: 160px;
	margin-bottom: 4rem;
	@media screen and (min-width: 640px) {
		margin: 0;
		padding: 0;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-image: url(/shared/desktop/bg-pattern-circle.svg);
	background-repeat: no-repeat;
	background-position: top center;
	@media screen and (min-width: 640px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-image: none;
		gap: 4rem;
	}
	@media screen and (min-width: 1024px) {
		justify-content: space-between;
		width: 100%;
		padding-left: 4rem;
	}
`;

const StyledLi = styled.li`
	display: flex;
	justify-content: center;
	color: #fbfcfe;
	font-weight: 600;
	font-size: 1.2rem;
	opacity: 0.7;
	letter-spacing: 0.5px;
	@media screen and (min-width: 640px) {
		font-size: 1rem;
	}
`;

const StyledIconsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin: auto;
	margin-top: 2rem;
	padding-bottom: 4rem;
	@media screen and (min-width: 640px) {
		margin: 0;
		padding: 0;
	}
`;

const StyledLiContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media screen and (min-width: 640px) {
		flex-direction: row;
	}
`;

const StyledDivFooter = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		width: 900px;
		margin: auto;
		justify-content: space-between;
	}
`;

export {
	StyledFooter,
	StyledNav,
	StyledDiv,
	StyledLogo,
	StyledUl,
	StyledLi,
	StyledIconsContainer,
	StyledLiContainer,
	StyledDivFooter
};
