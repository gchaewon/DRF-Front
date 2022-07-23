import styled from 'styled-components';

const PostsContainer = () => {
	return (
		<PostsWrapper>
			<WrapperTop>
				<PostBox></PostBox>
				<PostBox></PostBox>
				<PostBox></PostBox>
			</WrapperTop>
			<WrapperBottom>
				<PostBox></PostBox>
				<PostBox></PostBox>
				<PostBox></PostBox>
			</WrapperBottom>
		</PostsWrapper>
	);
};

const PostsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	height: 1020px;
	background-color: #eaf2ce;
`;
const WrapperTop = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 50px;
`;
const WrapperBottom = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 50px;
`;
const PostBox = styled.div`
	width: 396px;
	height: 423px;
	background-color: white;
	box-shadow: 0px 4px 4px 0px #00000040;
	border-radius: 30px;
`;
export default PostsContainer;
