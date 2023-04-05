import styled from 'styled-components';

const StyledFooter = styled.footer``;

const StyledDiv = styled.div`
	padding: 0 2rem;
	margin-bottom: 6rem;
`;

const StyledNav = styled.nav`
	background-color: #1b262f;
`;

const StyledLogo = styled.img`
	padding-top: 4rem;
	margin: auto;
	width: 160px;
	margin-bottom: 4rem;
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-image: url(/shared/desktop/bg-pattern-circle.svg);
	background-repeat: no-repeat;
	background-position: top center;
`;

const StyledLi = styled.li`
	display: flex;
	justify-content: center;
	color: #fbfcfe;
	font-weight: 600;
	font-size: 1.2rem;
	opacity: 0.7;
	letter-spacing: 0.5px;
`;

const StyledIconsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin: auto;
	margin-top: 2rem;
	padding-bottom: 4rem;
`;

export {
	StyledFooter,
	StyledNav,
	StyledDiv,
	StyledLogo,
	StyledUl,
	StyledLi,
	StyledIconsContainer
};
