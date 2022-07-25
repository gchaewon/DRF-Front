import styled from 'styled-components';
import circles from '../../static/circles.svg';

const Container3 = () => {
	return (
		<Wrapper>
			<img src={circles} />
		</Wrapper>
	);
};
export default Container3;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eaf2ce;
	height: 700px;
	img {
		margin: 50px;
	}
`;
