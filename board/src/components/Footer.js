import styled from 'styled-components';
import { ReactComponent as Logo } from '../static/logoIcon.svg';

const Footer = () => {
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 150px;
	width: 100%;
	background-color: #707365;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Footer;
