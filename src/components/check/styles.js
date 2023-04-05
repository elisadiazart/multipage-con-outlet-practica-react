import styled, { css } from 'styled-components';

const StyledCheck = styled.div`
	${props => {
		switch (props.pseudo) {
			case 'true':
				return css`
					&::after {
						content: 'yaaaaaaaaaaaay';
					}
				`;
		}
	}}
`;
export { StyledCheck };
