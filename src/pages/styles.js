import styled, { css } from 'styled-components';

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
	@media screen and (min-width: 720px) {
		background-position: bottom 40px left 500px;
	}
	@media screen and (min-width: 1024px) {
		background-position: bottom 100px right -150px;
	}
`;

const StyledChecksContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 2rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #bfcbd5;
	@media screen and (min-width: 640px) {
		margin: 0;
		min-width: 250px;
	}
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
	@media screen and (min-width: 640px) {
		margin-top: auto;
	}
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

const StyledAboutContainer = styled.div`
	margin: 2rem 2rem;
	margin-bottom: 4rem;
`;

const StyledAboutImage = styled.div`
	height: 350px;
	background-image: url('/about/mobile/image-team-members.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	@media screen and (min-width: 640px) {
		width: 100%;
		height: 300px;
		background-image: url('/about/tablet/image-team-members.jpg');
		background-size: 100%;
	}
	@media screen and (min-width: 1024px) {
		width: 100%;
		background-size: 100%;
		background-position: center;
	}
`;

const StyledAboutDataContainer = styled.div`
	border-top: 1px solid #bfcbd5;
	border-bottom: 1px solid #bfcbd5;
	padding: 1rem 0;
	@media screen and (min-width: 640px) {
		display: flex;
		justify-content: space-between;
		padding-right: 200px;
		padding-top: 2rem;
		margin-bottom: 6rem;
	}
	@media screen and (min-width: 1024px) {
		width: 900px;
		margin: auto;
		padding: 1rem 0;
		margin-bottom: 6rem;
	}
`;

const StyledData = styled.p`
	font-family: 'DM Serif Display', serif;
	text-align: center;
	color: #ba4270;
	font-size: 3.7rem;
	margin-bottom: 2rem;
	@media screen and (min-width: 640px) {
		margin: 0;
	}
	@media screen and (min-width: 1024px) {
		text-align: left;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	color: #92a3b1;

	@media screen and (min-width: 640px) {
		width: 450px;
		margin: auto;
	}
`;

const StyledMain = styled.main`
	margin: 2rem;
`;
const StyledLabel = styled.label`
	padding: 0 1rem;
`;

const StyledInput = styled.textarea`
	border: none;
	background-color: transparent;
	padding: 0.5rem;
	border-bottom: 1px solid #b4c1cc;
	max-width: 100%;
	height: 6rem;
	max-height: 20rem;
`;

const StyledCheckbox = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;
	margin: 1.5rem 0;
	color: #36536b;
`;

const StyledCheckboxBox = styled.input``;

const StyledSubmit = styled.input`
	background-color: transparent;
	border: 1px solid #36536b;
	padding: 1rem;
	font-family: 'Public Sans', sans-serif;
	font-weight: 800;
	font-size: 1rem;
	color: #36536b;
	width: 200px;
	border-radius: 40px;
`;

const StyledDiv = styled.div`
	margin-top: 8rem;
	@media screen and (min-width: 1024px) {
		width: auto;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 45%;
	}
`;

const StyledPricings = styled.div`
	@media screen and (min-width: 720px) {
		display: flex;
		margin: auto;
		justify-content: center;
		gap: 0.5rem;
		width: 90%;
		max-width: 900px;
	}
	@media screen and (min-width: 640px) {
		margin: 0;
	}
	@media screen and (min-width: 1024px) {
		justify-content: space-between;
		width: 100%;
	}
`;

const StyledPricingsContainer = styled.div`
	@media screen and (min-width: 1024px) {
		width: 900px;
		margin: auto;
	}
`;

const StyledTitleContainer = styled.div`
	@media screen and (min-width: 640px) {
		width: 500px;
		margin: auto;
		margin-bottom: 2rem;
	}
	@media screen and (min-width: 1024px) {
		width: 900px;
		margin: auto;
		padding-right: 18rem;
		margin-bottom: 2rem;
		${props => {
			switch (props.contact) {
				case 'true':
					return css`
					padding-right: 0;
					width: auto;
					margin-bottom: 0;
					}
				`;
			}
		}}
	}
`;

const StyledTextContainer = styled.div`
	@media screen and (min-width: 640px) {
		display: flex;
		align-items: flex-start;
		margin-bottom: 2rem;
	}
	@media screen and (min-width: 1024px) {
		width: 900px;
		margin: auto;
		margin-bottom: 2rem;
	}
`;

const StyledTitle = styled.h3`
	font-family: 'DM Serif Display', serif;
	font-weight: 400;
	font-size: 2.375rem;
	line-height: 48px;
	text-align: center;
	padding-bottom: 2rem;
	color: #647b8e;
	@media screen and (min-width: 640px) {
		font-size: 1.7rem;
	}
	@media screen and (min-width: 1024px) {
		text-align: left;
		padding-bottom: 1.5rem;
	}
`;

const StyledContactContainer = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		width: 900px;
		margin: auto;
		align-items: center;
		gap: 4rem;
		margin-bottom: 8rem;
	}
`;

export {
	StyledMainPricing,
	StyledMainTop,
	StyledChecksContainer,
	StyledCheckContainer,
	StyledPrice,
	StyledPriceTitle,
	StyledAboutContainer,
	StyledAboutImage,
	StyledAboutDataContainer,
	StyledData,
	StyledForm,
	StyledMain,
	StyledInput,
	StyledLabel,
	StyledCheckbox,
	StyledCheckboxBox,
	StyledSubmit,
	StyledDiv,
	StyledPricings,
	StyledTitleContainer,
	StyledTextContainer,
	StyledTitle,
	StyledPricingsContainer,
	StyledContactContainer
};
