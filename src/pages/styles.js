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

const StyledAboutContainer = styled.div`
	margin: 2rem 2rem;
	margin-bottom: 4rem;
`;

const StyledAboutImage = styled.div`
	height: 350px;
	background-image: url('/about/mobile/image-team-members.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`;

const StyledAboutDataContainer = styled.div`
	border-top: 1px solid #bfcbd5;
	border-bottom: 1px solid #bfcbd5;
	padding: 1rem 0;
`;

const StyledData = styled.p`
	font-family: 'DM Serif Display', serif;
	text-align: center;
	color: #ba4270;
	font-size: 3.7rem;
	margin-bottom: 2rem;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	color: #92a3b1;
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
	StyledDiv
};
