import styled from 'styled-components';
import { ReactComponent as Logo2 } from '../../static/logo2.svg';
import foodEx from '../../static/foodEx.png';

const Container2 = () => {
	return (
		<Wrapper>
			<img src={foodEx} />
			<TextContainer>
				<Logo2 className='logo2' />
				<TextWrapper>
					<p>나만 알고 있는 비건 식당과 카페를</p>
					<p> 더 많은 사람들과 공유해 보세요.</p>
				</TextWrapper>
			</TextContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: #eaf2ce;
	height: 700px;
	img {
		margin: 180px 0 0 100px;
		height: 429px;
		width: 643px;
	}
`;
const TextContainer = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.logo2 {
		width: 300px;
		margin: 0 100px 50px 0;
	}
	p {
		width: 430px;
	}
`;
const TextWrapper = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	font-size: 30px;
	line-height: 65px;
	color: #46483e;
`;
export default Container2;
