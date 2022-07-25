import styled from 'styled-components';
import PostsContainer from '../PostsContainer';
import Footer from '../Footer';

const ReadFooter = () => {
	return (
		<>
			<PostsWrapper>
				<PostsContainer />
			</PostsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</>
	);
};
const PostsWrapper = styled.div`
	width: 100%;
	height: 600px;
	position: absolute;
	top: 1700px;
	bottom: 109px;
	background-color: #d2d8c7;
	::-webkit-scrollbar {
		display: none;
	}
`;
const FooterWrapper = styled.div`
	width: 100%;
	position: absolute;
	height: 150px;
	top: 2300px;
`;
export default ReadFooter;
