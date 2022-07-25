import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

const PostsContainer = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		getPosts();
	}, []);

	//var postsLength = Math.round(posts.length / 2);

	const getPosts = () => {
		setPosts(data);
	};
	return (
		<Wrapper>
			<PostWrapper>
				{posts.map(post => (
					<PostBox key={post.id}>
						<Link to='/read'>
							<PostPicture>
								<img src={post.picture} />
							</PostPicture>
							<PostTitle>{post.title}</PostTitle>
							<PostDate>{post.created}</PostDate>
						</Link>
					</PostBox>
				))}
			</PostWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 600px;
	background-color: transparent;
	padding-top: 10px;
	overflow: scroll;
	overflow-y: hidden;
	display: flex;
	align-items: center;
	a {
		text-decoration: none;
		color: black;
		height: 480px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	::-webkit-scrollbar {
		display: none;
	}
`;
const PostWrapper = styled.div`
	height: 480px;
	display: flex;
	background-color: transparent;
	align-items: center;
`;

const PostBox = styled.div`
	width: 396px;
	height: 480px;
	background-color: white;
	box-shadow: 0px 4px 4px 0px #00000040;
	border-radius: 30px;
	margin-left: 70px;
	padding: 0 30px 0px 30px;
`;
const PostPicture = styled.div`
	img {
		width: 343.33px;
		height: 247.4px;
		border-radius: 14px;
	}
`;
const PostTitle = styled.div`
	width: 343.33px;
	font-weight: 700;
`;
const PostDate = styled.div`
	width: 343.33px;
	margin-bottom: 20px;
`;
export default PostsContainer;

// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// //import data from '../data.json';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const PostsContainer = () => {
// 	const [posts, setPosts] = useState([]);
// 	useEffect(() => {
// 		getPosts();
// 	}, []);

// 	const getPosts = async () => {
// 		const response = await axios
// 			.get('http://127.0.0.1:8000/vegan/')
// 			.then(response => {
// 				setPosts(response.data);
// 			})
// 			.catch(error => {
// 				console.log('전체 글 불러오기 실패', error.message);
// 			});
// 	};
// 	return (
// 		<Wrapper>
// 			<PostWrapper>
// 				{posts.map(post => (
// 					<PostBox key={post.id}>
// 						<Link to='/read'>
// 							<PostPicture>{<img src={post.image} />}</PostPicture>
// 							<PostTitle>{post.title}</PostTitle>
// 							<PostDate>{post.created}</PostDate>
// 						</Link>
// 					</PostBox>
// 				))}
// 			</PostWrapper>
// 		</Wrapper>
// 	);
// };

// const Wrapper = styled.div`
// 	height: 600px;
// 	background-color: transparent;
// 	padding-top: 10px;
// 	overflow: scroll;
// 	overflow-y: hidden;
// 	display: flex;
// 	align-items: center;
// 	a {
// 		text-decoration: none;
// 		color: black;
// 		height: 480px;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: space-evenly;
// 		align-items: center;
// 	}
// 	::-webkit-scrollbar {
// 		display: none;
// 	}
// `;
// const PostWrapper = styled.div`
// 	height: 480px;
// 	display: flex;
// 	background-color: transparent;
// 	align-items: center;
// `;

// const PostBox = styled.div`
// 	width: 396px;
// 	height: 480px;
// 	background-color: white;
// 	box-shadow: 0px 4px 4px 0px #00000040;
// 	border-radius: 30px;
// 	margin-left: 70px;
// 	padding: 0 30px 0px 30px;
// `;
// const PostPicture = styled.div`
// 	img {
// 		width: 343.33px;
// 		height: 247.4px;
// 		border-radius: 14px;
// 	}
// `;
// const PostTitle = styled.div`
// 	width: 343.33px;
// 	font-weight: 700;
// `;
// const PostDate = styled.div`
// 	width: 343.33px;
// 	margin-bottom: 20px;
// `;
// export default PostsContainer;
