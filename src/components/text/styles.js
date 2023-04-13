import styled, { css } from 'styled-components';

const StyledText = styled.p`
	text-align: center;
	line-height: 38px;
	color: ${({ color }) => color};
	display: ${({ display }) => display};
	@media screen and (min-width: 640px) {
		line-height: 30px;
		display: ${({ displayIpad }) => displayIpad};

		${props => {
			switch (props.left) {
				case 'true':
					return css`
					text-align: left;
					width: 500px;
					}
				`;
			}
		}};
	}
	@media screen and (min-width: 1020px) {
		display: block;

		${props => {
			switch (props.leftPc) {
				case 'true':
					return css`
					text-align: left;
					
					}
				`;
			}
		}};
	}
`;

const StyledSpan = styled.span`
	margin-left: 0.3rem;
	font-weight: 700;
`;

export { StyledText, StyledSpan };
