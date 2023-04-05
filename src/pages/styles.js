import styled from 'styled-components';

const StyledMainPricing = styled.main`
	margin-bottom: 8rem;
	margin-top: 2rem;
`;

const StyledMainTop = styled.div`
	width: 100%;
	background-image: url(/shared/desktop/bg-pattern-circle.svg);
	background-repeat: no-repeat;
	background-position: bottom 200px left 180px;
	position: absolute;
	top: 0;
	padding-top: 20rem;
`;

const StyledChecksContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 2rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #bfcbd5;
`;

const StyledCheckContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	width: 80px;
	margin: auto;
	padding-top: 2rem;
	padding-bottom: 1rem;
`;

const StyledPrice = styled.p`
	color: #36536b;
	font-size: 56px;
	text-align: center;
	font-family: 'DM Serif Display', serif;
	padding-bottom: 1rem;
	border-bottom: 1px solid #bfcbd5;
`;

const StyledPriceTitle = styled.h3`
	text-align: center;
	color: #ba4270;
	font-family: 'DM Serif Display', serif;
	font-size: 1.6rem;
	font-weight: 300;
	padding-bottom: 1rem;
	padding-top: 1rem;
`;

export {
	StyledMainPricing,
	StyledMainTop,
	StyledChecksContainer,
	StyledCheckContainer,
	StyledPrice,
	StyledPriceTitle
};
