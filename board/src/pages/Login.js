import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../static/logoIcon.svg';
import LoginBox from '../components/login/LoginBox';

const Login = () => {
	return (
		<Wrapper>
			<LogoIcon className='logoIcon' />
			<LoginBox />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 1020px;
	.logoIcon {
		position: absolute;
		top: 8%;
	}
`;

export default Login;
