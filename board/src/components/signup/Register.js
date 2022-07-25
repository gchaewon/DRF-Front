import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	faCheck,
	faTimes,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as Logo } from '../../static/logoIcon.svg';
import { ReactComponent as GoLoginIcon } from '../../static/goLoginIcon.svg';
import styled from 'styled-components';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[0-9]).{8,24}$/;

const Register = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidName(USER_REGEX.test(user));
	}, [user]);

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd]);

	const handleSubmit = async e => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		if (!v1 || !v2) {
			setErrMsg('Invalid Entry');
			return;
		}

		console.log(user, pwd);
		setSuccess(true);
	};

	return (
		<Wrapper>
			{success ? (
				<SignupModal>
					<h2>회원가입이 완료되었습니다!</h2>
					<Link to='/login'>
						<GoLoginIcon />
					</Link>
				</SignupModal>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live='assertive'
					>
						{errMsg}
					</p>
					<form onSubmit={handleSubmit}>
						<div>
							<Logo width='250' className='logoIcon' />
						</div>

						<label htmlFor='username'>
							아이디
							<FontAwesomeIcon
								icon={faCheck}
								className={validName ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validName || !user ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type='text'
							id='username'
							ref={userRef}
							autoComplete='off'
							onChange={e => setUser(e.target.value)}
							value={user}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby='uidnote'
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id='uidnote'
							className={
								userFocus && user && !validName ? 'instructions' : 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							4글자 이상, 24글자 이하로 입력해주세요
							<br />
							알파벳으로 시작되어야합니다
							<br />
							알파벳, 숫자, 밑줄, 하이픈이 입력가능합니다
						</p>

						<label htmlFor='password'>
							비밀번호
							<FontAwesomeIcon
								icon={faCheck}
								className={validPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validPwd || !pwd ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type='password'
							id='password'
							onChange={e => setPwd(e.target.value)}
							value={pwd}
							required
							aria-invalid={validPwd ? 'false' : 'true'}
							aria-describedby='pwdnote'
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
						/>
						<p
							id='pwdnote'
							className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							8자 이상, 24자 이하의 숫자를 입력해주세요
							<br />
						</p>

						<label htmlFor='confirm_pwd'>
							비밀번호 재확인
							<FontAwesomeIcon
								icon={faCheck}
								className={validMatch && matchPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validMatch || !matchPwd ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type='password'
							id='confirm_pwd'
							onChange={e => setMatchPwd(e.target.value)}
							value={matchPwd}
							required
							aria-invalid={validMatch ? 'false' : 'true'}
							aria-describedby='confirmnote'
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id='confirmnote'
							className={
								matchFocus && !validMatch ? 'instructions' : 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							처음 입력한 비밀번호와 똑같이 입력해주세요.
						</p>

						<button
							disabled={!validName || !validPwd || !validMatch ? true : false}
						>
							가입하기
						</button>
					</form>
					<p>
						이미 가입하셨나요?
						<br />
						<span className='line'>
							<Link to='/login'>로그인</Link>
						</span>
					</p>
				</section>
			)}
		</Wrapper>
	);
};
const SignupModal = styled.div`
	width: 901px;
	height: 436px;
	background: rgba(112, 115, 101, 0.42);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 102px;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	html {
		font-family: 'Nunito', sans-serif;
		font-size: 13px;
		color: #000;
	}

	.logoIcon {
		margin: 0 0 20px 60px;
	}

	body {
		min-height: 100vh;
		background-color: #f5f5f5;
	}
	section {
		width: 100%;
		max-width: 420px;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 1rem;
		background-color: #fff(0, 0, 0, 0.4);
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		flex-grow: 1;
		padding-bottom: 1rem;
	}

	a,
	a:visited {
		color: #000;
	}

	input {
		width: 400px;
	}
	input[type='text'],
	input[type='password'],
	button,
	textarea {
		font-family: 'Nunito', sans-serif;
		font-size: 22px;
		padding: 0.25rem;
		border-radius: 0.5rem;
		margin-bottom: 10px;
		margin-top: 10px;
	}

	label,
	button {
		margin-top: 1rem;
	}

	button {
		padding: 0.5rem;
		background-color: #b6d96a;
		font-size: 20px;
		color: #fff;
		margin-top: 90px;
	}

	.instructions {
		font-size: 0.75rem;
		border-radius: 0.5rem;
		background: #b6d96a;
		color: #000;
		padding: 0.25rem;
		position: relative;
		bottom: -10px;
	}

	.instructions > svg {
		margin-right: 0.25rem;
	}

	.offscreen {
		position: absolute;
		left: -9999px;
	}

	.hide {
		display: none;
	}

	.valid {
		color: limegreen;
		margin-left: 0.25rem;
	}

	.invalid {
		color: red;
		margin-left: 0.25rem;
	}

	.errmsg {
		background-color: lightpink;
		color: firebrick;
		font-weight: bold;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.line {
		display: inline-block;
	}
`;
export default Register;
