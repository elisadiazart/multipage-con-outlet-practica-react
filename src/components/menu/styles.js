import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 100vh;
	position: absolute;
	background-color: #1b262f;
	z-index: 1;
	width: 80%;
	right: 0;
	padding: 3.5rem 2rem;
`;

const StyledCross = styled.img`
	display: flex;
	justify-content: flex-end;
	margin-left: auto;
	padding-bottom: 2rem;
	padding-right: 1rem;
	padding-left: calc(100% - 22px - 1rem);
	border-bottom: 1px solid #404b56;
	margin-bottom: 3rem;
`;

const StyledLi = styled.li`
	text-align: center;
	opacity: 0.7;
	color: #fbfcfe;
	padding: 1rem;
	font-size: 1.3rem;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	margin: auto;
	margin-top: 2rem;
	width: 90%;
	padding: 1rem 2rem;
	border-radius: 24px;
	background: #ba4270;
	border-radius: 24px;
	border: none;
	color: white;
	font-weight: 600;
	font-size: 1rem;
	font-family: 'Public Sans', sans-serif;
`;

const StyledContainer = styled.div`
	left: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 10;
	overflow: hidden;
	transform: translate(${({ translate }) => translate});
	transition: transform 0.3s;
`;

export { StyledDiv, StyledCross, StyledLi, StyledButton, StyledContainer };
