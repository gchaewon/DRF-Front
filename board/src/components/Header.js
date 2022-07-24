import styled from 'styled-components';
import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../static/logoIcon.svg';
import { BsFillPersonFill } from 'react-icons/bs';
import { ReactComponent as MenuIcon } from '../static/menuIcon.svg';
import MenuBar from './MenuBar';
import DATA from './../data';

const Header = () => {
	let [modal, setModal] = useState(false);
	return (
		<Wrapper>
			<LogoIcon className='logoIcon' />
			<HeaderRight>
				<UserId>
					<p>{DATA[2].id}</p>
					<p>님</p>
				</UserId>
				<UserIcon>
					<BsFillPersonFill className='userIcon' />
				</UserIcon>
				<MenuBtn
					onClick={() => {
						setModal(!modal);
					}}
				>
					<MenuIcon />
				</MenuBtn>
				{modal === true ? <MenuBar /> : null}
			</HeaderRight>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 120px;
	.logoIcon {
		width: 200px;
		margin-left: 50px;
	}
`;
const UserId = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	font-size: 20px;
	font-weight: 800;
	p:first-child {
		color: #53a62d;
	}
`;
const HeaderRight = styled.div`
	width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const UserIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 78px;
	width: 78px;
	background-color: #d9d9d9;
	border-radius: 100%;
	.userIcon {
		width: 35.82px;
		height: 35.82px;
	}
`;
const MenuBtn = styled.button`
	width: 50px;
	margin-left: 30px;
	border-style: none;
	background-color: transparent;
`;
export default Header;
