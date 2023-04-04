import styled from 'styled-components';

const StyledMain = styled.main``;

const StyledImageMobile = styled.img`
	margin: auto;
	height: 500px;
	transform: translateX(1.5rem);
`;

const StyledCircle = styled.div`
	background-image: url(/shared/desktop/bg-pattern-circle.svg);
	background-repeat: no-repeat;
	background-position: center bottom;
	background-size: 120%;
	width: 100%;
	height: 400px;
	position: absolute;
	top: 0;
`;

const StyledHeaderBottom = styled.div`
	margin: 0 2rem;
`;

const StyledBrandsDiv = styled.div`
	background-color: #1b262f;
	padding: 0rem 2rem 4rem;
`;

const StyledImplement = styled.div`
	margin: 6rem 3rem 4rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledImplenmentImage = styled.img`
	width: 80%;
	max-width: 400px;
	margin: auto;
	margin-bottom: 4rem;
`;

const StyledUi = styled.div`
	margin: 6rem 3rem 4rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledMobiletImage = styled.img`
	height: 400px;
	object-fit: contain;
	transform: translate(1rem);
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4rem 4rem;
`;

const StyledTitle = styled.h3`
	margin: 1.5rem 0;
`;

const StyledCards = styled.div`
	padding: 2rem 0;
`;

export {
	StyledHeaderBottom,
	StyledImageMobile,
	StyledMain,
	StyledCircle,
	StyledBrandsDiv,
	StyledImplement,
	StyledImplenmentImage,
	StyledUi,
	StyledMobiletImage,
	StyledCard,
	StyledTitle,
	StyledCards
};
