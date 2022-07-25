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
	height: 600px;
	position: absolute;
	top: 1700px;
	bottom: 109px;
	background-color: #d2d8c7;
`;
const FooterWrapper = styled.div`
	position: absolute;
	height: 150px;
	top: 2300px;
`;
export default ReadFooter;
