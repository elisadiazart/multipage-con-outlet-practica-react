import styled, { css } from 'styled-components';

const StyledCheck = styled.div`
	display: inline;
	font-size: 1.1rem;
	font-weight: 400;
	position: relative;
	text-align: left;
	color: #92a3b2;
	margin-bottom: 0.5rem;

	${props => {
		switch (props.pseudo) {
			case 'true':
				return css`
					color: #36536b;
					&::after {
						content: '';
						display: block;
						background-image: url(/shared/desktop/icon-check.svg);
						background-repeat: no-repeat;
						background-size: contain;
						width: 20px;
						height: 20px;
						position: absolute;
						left: -2rem;
						top: 0;
					}
				`;
		}
	}};
`;
export { StyledCheck };
