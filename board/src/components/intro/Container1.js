import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Background } from '../../static/background.svg';
import { ReactComponent as LoginIcon } from '../../static/loginIcon.svg';
import { ReactComponent as SignupIcon } from '../../static/signupIcon.svg';

const Container1 = () => {
	return (
		<Wrapper>
			<Background className='background' />
			<ButtonWrapper>
				<Link to='/login'>
					<LoginIcon />
				</Link>
				<Link to='/signup'>
					<SignupIcon />
				</Link>
			</ButtonWrapper>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	width: 100%;
	height: 900px;

	background-color: #d2d8c7;
	.background {
		position: absolute;
		top: 5%;
	}
`;
const ButtonWrapper = styled.div`
	width: 500px;
	position: absolute;
	display: flex;
	top: 70%;
	left: 5%;
`;
export default Container1;
