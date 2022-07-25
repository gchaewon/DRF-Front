import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../static/checkIcon.svg';

const LoginBox = () => {
	return (
		<Wrapper>
			<IdInput placeholder='아이디' />
			<PwInput placeholder='비밀번호' />
			<KeepLogin>
				<CheckIcon className='checkIcon' />
				<p>로그인 상태유지</p>
			</KeepLogin>
			<Link to='/main'>
				<LoginBtn>로그인</LoginBtn>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 28%;
	width: 634px;
	height: 396px;
	border: 2px solid #b6b6b6;
	border-radius: 58px;
	a {
		color: transparent;
	}
`;

const IdInput = styled.input`
	width: 436px;
	height: 68px;
	border-color: transparent transparent #b6d96a transparent;
	outline: none;
	font-size: 20px;
	color: #707365;
`;
const PwInput = styled.input`
	width: 436px;
	height: 68px;
	border-color: transparent transparent #b6d96a transparent;
	outline: none;
	font-size: 20px;
	color: #707365;
`;
const KeepLogin = styled.div`
	width: 200px;
	display: flex;
	align-items: center;
	margin: 30px 260px 30px 0;
	font-size: 16px;
	font-weight: 700;
	color: #707365;
	.checkIcon {
		width: 50px;
	}
`;
const LoginBtn = styled.div`
	width: 493px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #b6d96a;
	border-radius: 9px;
	border-style: none;
	color: white;
	font-size: 20px;
	font-weight: 800;
`;

export default LoginBox;
