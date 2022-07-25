import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuContainer } from '../static/menuContainer.svg';
const MenuBar = () => {
	return (
		<Wrapper>
			<TextWrapper>
				<Link to='/write'>글 작성</Link>
				<p>My Page</p>
				<Link to='/'>로그아웃</Link>
			</TextWrapper>
			<MenuContainer className='menuContainer'></MenuContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	z-index: 2;
	top: 150px;
	width: 270px;
	.menuContainer {
		position: absolute;
		top: 0px;
	}
`;
const TextWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	z-index: 2;
	width: 180px;
	height: 190px;
	a,
	p {
		font-size: 20px;
		text-decoration-line: none;
		color: black;
		margin-top: 20px;
	}
	a:hover,
	p:hover {
		color: #ffc24f;
	}
`;
export default MenuBar;
