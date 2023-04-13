import styled from 'styled-components';

const StyledMain = styled.main``;

const StyledImageMobile = styled.img`
	margin: auto;
	height: 500px;
	transform: translateX(1.5rem);
	@media screen and (min-width: 1024px) {
		margin: 0;
		transform: translateX(1.5rem);
	}
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
	@media screen and (min-width: 1024px) {
		right: 0;
		width: 800px;
		background-size: 100%;
		height: 600px;
		background-position: right -100px bottom 100px;
	}
`;

const StyledHeaderBottom = styled.div`
	margin: 0 2rem;
`;

const StyledBrandsDiv = styled.div`
	background-color: #1b262f;
	padding: 0rem 2rem 4rem;
	@media screen and (min-width: 1024px) {
		background-image: url(/shared/desktop/bg-pattern-circle.svg);
		background-repeat: no-repeat;
		background-size: 700px;
		background-position: bottom 2rem left -200px;
		padding: 0;
	}
`;

const StyledBrandsContainer = styled.div`
	@media screen and (min-width: 1024px) {
		width: 900px;
		margin: auto;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		padding: 6rem 0;
		gap: 2rem;
	}
`;

const StyledImplement = styled.div`
	margin: 6rem 3rem 4rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (min-width: 1024px) {
		width: 900px;
		gap: 6rem;
		display: flex;
		flex-direction: row;
		margin: 6rem auto 4rem auto;
		align-items: center;
	}
`;

const StyledImplenmentImage = styled.img`
	width: 80%;
	max-width: 400px;
	margin: auto;
	margin-bottom: 4rem;
	@media screen and (min-width: 1024px) {
		margin: 0;
		width: 100%;
	}
`;

const StyledUi = styled.div`
	margin: 6rem 3rem 4rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (min-width: 1024px) {
		width: 900px;
		gap: 6rem;
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		margin: 6rem auto 4rem auto;
	}
`;

const StyledMobiletImage = styled.img`
	height: 400px;
	object-fit: contain;
	transform: translate(1rem);
	@media screen and (min-width: 1024px) {
		height: 500px;
		transform: translateY(2rem) translateX(5rem);
	}
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4rem 4rem;
	@media screen and (min-width: 640px) {
		margin: 0;
	}
`;

const StyledTitle = styled.h3`
	margin: 1.5rem 0;
`;

const StyledCards = styled.div`
	padding: 2rem 0;
	@media screen and (min-width: 640px) {
		display: flex;
		gap: 2rem;
		margin: 0 2rem;
		margin-bottom: 6rem;
	}
	@media screen and (min-width: 1024px) {
		width: 900px;
		margin: auto;
		gap: 3rem;
		margin-bottom: 6rem;
	}
`;

const StyledTextContainer = styled.div`
	@media screen and (min-width: 640px) {
		width: 500px;
		margin: auto;
	}
	@media screen and (min-width: 1024px) {
		width: 500px;
		margin: 0;
	}
`;

const StyledDiv = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row-reverse;
		width: 900px;
		margin: auto;
		margin-top: 1rem;
		align-items: center;
		justify-content: space-between;
	}
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
	StyledCards,
	StyledTextContainer,
	StyledDiv,
	StyledBrandsContainer
};
