import styled from 'styled-components';
import { ReactComponent as Background } from '../../static/background2.svg';
import { BsSearch } from 'react-icons/bs';
const MainTop = () => {
	return (
		<Wrapper>
			<SearchBarWrapper>
				<SearchBar placeholder='우리 동네 비건 맛집' />
				<BsSearch className='searchIcon' />
			</SearchBarWrapper>
			<Background className='background' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 920px;
	background-color: #d2d8c7;
	.background {
		position: absolute;
		top: 165px;
	}
`;
const SearchBarWrapper = styled.div`
	position: absolute;
	z-index: 2;
	width: 620px;
	height: 62px;
	display: flex;
	margin-top: 80px;
	.searchIcon {
		width: 40px;
		height: auto;
		margin-left: 20px;
		color: #707365;
	}
`;
const SearchBar = styled.input`
	display: flex;
	width: 556px;
	height: 61px;
	background: rgba(255, 255, 255, 0.41);
	border-radius: 9px;
	border: none;
	outline: none;
	padding-left: 10px;
	font-size: 25px;
	color: #707365;
`;
export default MainTop;
